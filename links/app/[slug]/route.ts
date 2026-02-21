import { NextRequest, NextResponse } from "next/server";
import linksData from "@/data/links.json";
import { LinksData } from "@/types/links";

const data = linksData as LinksData;

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  for (const section of data.sections) {
    for (const item of section.items) {
      if (item.slug === slug) {
        return NextResponse.redirect(item.url, 302);
      }
    }
  }

  return NextResponse.redirect(new URL("/", _request.url), 302);
}
