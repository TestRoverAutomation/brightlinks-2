import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const RECIPIENT = 'info@brightlinksuk.com';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { formType, name, company, email, phone, service, message } = body;

    const label = formType === 'contact' ? 'Contact Form' : 'Inquiry Form';
    const subject = `New ${label} Submission${service ? ` — ${service}` : ''}`;

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1B2B6B">
        <div style="background:#1B2B6B;padding:24px 32px;border-radius:8px 8px 0 0">
          <h1 style="margin:0;color:#fff;font-size:20px">BrightLinks UK — ${label}</h1>
        </div>
        <div style="background:#f8fafc;padding:32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:700;width:140px;vertical-align:top">Name</td><td style="padding:8px 0">${name}</td></tr>
            ${company ? `<tr><td style="padding:8px 0;font-weight:700;vertical-align:top">Company</td><td style="padding:8px 0">${company}</td></tr>` : ''}
            <tr><td style="padding:8px 0;font-weight:700;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#00A8CC">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px 0;font-weight:700;vertical-align:top">Phone</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#00A8CC">${phone}</a></td></tr>` : ''}
            ${service ? `<tr><td style="padding:8px 0;font-weight:700;vertical-align:top">Service</td><td style="padding:8px 0">${service}</td></tr>` : ''}
            <tr>
              <td style="padding:8px 0;font-weight:700;vertical-align:top">Message</td>
              <td style="padding:8px 0;white-space:pre-wrap">${message}</td>
            </tr>
          </table>
          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:13px;color:#64748b">
            Reply directly to this email to respond to ${name}.
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'BrightLinks UK <noreply@brightlinksuk.com>',
      to: RECIPIENT,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
