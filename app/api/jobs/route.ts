import { NextResponse } from "next/server"
import { getSupabaseAdminClient } from "@/lib/supabase/admin"

export const runtime = "nodejs"

export async function GET() {
  try {
    const supabase = getSupabaseAdminClient()
    const { data, error } = await supabase.rpc("rpc_get_active_jobs")

    if (error) {
      throw error
    }

    return NextResponse.json({ jobs: data ?? [] })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load jobs"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}