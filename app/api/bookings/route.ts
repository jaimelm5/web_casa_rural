import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        status: "confirmed"
      },
      select: {
        startDate: true,
        endDate: true
      }
    });
    
    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Error fetching bookings" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, email, phone, guests, startDate, endDate, price } = body;
    
    // Validate required fields
    if (!name || !email || !startDate || !endDate || !guests) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Create booking
    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone: phone || "",
        guests,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        price,
        status: "pending"
      }
    });
    
    return NextResponse.json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Error creating booking" },
      { status: 500 }
    );
  }
}