import { NextResponse } from 'next/server';
import { isMock } from '@/lib/env';

export function GET() {
  return NextResponse.json({ ok: true, mock: isMock });
}
