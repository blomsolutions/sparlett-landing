import { NextRequest, NextResponse } from "next/server";
import { yahooFinance } from "@/lib/yahoo-finance";

export async function GET(request: NextRequest) {
  const symbol = request.nextUrl.searchParams.get("symbol");
  if (!symbol) {
    return NextResponse.json({ error: "Missing symbol" }, { status: 400 });
  }

  try {
    const period1 = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
    const result = await yahooFinance.chart(symbol, {
      period1,
      interval: "1d",
    });

    const quotes = result.quotes
      .filter((q) => q.close != null)
      .map((q) => ({
        date: q.date.toISOString().split("T")[0],
        close: q.close,
      }));

    return NextResponse.json({
      meta: {
        currency: result.meta.currency,
        symbol: result.meta.symbol,
      },
      quotes,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch chart data" },
      { status: 500 }
    );
  }
}
