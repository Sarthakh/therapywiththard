import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, date, time, sessionType, message } = await request.json();

    // Set up Google Calendar API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // Convert time preference to specific time
    const timeMap: Record<string, string> = {
      'morning': '10:00:00',
      'afternoon': '14:00:00',
      'evening': '17:00:00',
    };

    const startTime = timeMap[time] || '10:00:00';
    const startDateTime = `${date}T${startTime}`;

    // Calculate end time (1 hour later)
    const endDate = new Date(startDateTime);
    endDate.setHours(endDate.getHours() + 1);

    // Create calendar event
    const event = {
      summary: `Therapy Session - ${sessionType}`,
      description: `Session with ${name}\nPhone: ${phone}\nType: ${sessionType}\n\nNotes: ${message || 'N/A'}`,
      start: {
        dateTime: startDateTime,
        timeZone: 'America/New_York', // Change to your timezone
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: 'America/New_York',
      },
      attendees: [
        { email: email },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 30 },
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      sendUpdates: 'all', // Send email invitations to attendees
    });

    return NextResponse.json({
      success: true,
      eventId: response.data.id,
      eventLink: response.data.htmlLink,
    });

  } catch (error) {
    console.error('Calendar API error:', error);
    return NextResponse.json(
      { error: 'Failed to create calendar event' },
      { status: 500 }
    );
  }
}
