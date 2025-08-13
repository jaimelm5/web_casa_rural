import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const availability = await prisma.availability.findMany({
      orderBy: {
        date: "asc"
      }
    });
    
    return NextResponse.json(availability);
  } catch (error) {
    console.error("Error fetching availability:", error);
    return NextResponse.json(
      { error: "Error fetching availability" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { date, available, price } = body;
    
    // Validate required fields
    if (!date || available === undefined || price === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Check if date already exists
    const existingDate = await prisma.availability.findUnique({
      where: {
        date: new Date(date)
      }
    });
    
    if (existingDate) {
      // Update existing date
      const updatedAvailability = await prisma.availability.update({
        where: {
          id: existingDate.id
        },
        data: {
          available,
          price
        }
      });
      
      return NextResponse.json(updatedAvailability);
    } else {
      // Create new date
      const newAvailability = await prisma.availability.create({
        data: {
          date: new Date(date),
          available,
          price
        }
      });
      
      return NextResponse.json(newAvailability);
    }
  } catch (error) {
    console.error("Error updating availability:", error);
    return NextResponse.json(
      { error: "Error updating availability" },
      { status: 500 }
    );
  }
}