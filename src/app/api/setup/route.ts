import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function GET() {
  try {
    const drops = [
      { cell: 'GTA-001', area: 'Toronto', population: 30000, cap_percent: 3, cards: 900, merchant: 'Metro Downtown', status: 'active' },
      { cell: 'GTA-002', area: 'Mississauga', population: 25000, cap_percent: 3, cards: 750, merchant: 'PetSmart Central', status: 'active' },
      { cell: 'GTA-003', area: 'Vaughan', population: 15000, cap_percent: 3, cards: 450, merchant: 'Loblaws North', status: 'active' },
      { cell: 'GTA-004', area: 'Oakville', population: 13333, cap_percent: 3, cards: 400, merchant: 'Sobeys Lakeshore', status: 'active' }
    ]

    const kpi = [
      { metric: 'GMV', value: 225000, category: 'financial' },
      { metric: 'ARR', value: 180000, category: 'financial' },
      { metric: 'LTV_Base', value: 49, category: 'performance' },
      { metric: 'LTV_Viral', value: 71, category: 'performance' },
      { metric: 'CAC_Base', value: 30, category: 'cost' },
      { metric: 'CAC_Viral', value: 20.68, category: 'cost' },
      { metric: 'ROI_Base', value: 0.62, category: 'efficiency' },
      { metric: 'ROI_Viral', value: 2.41, category: 'efficiency' },
      { metric: 'ARPU_Base', value: 10.44, category: 'user' }
    ]

    const agents = [
      { name: 'DropOrchestrator', event: 'Activated 4 cells', confidence: 0.97, status: 'ok' },
      { name: 'FraudMonitor', event: 'No anomalies detected', confidence: 0.94, status: 'ok' },
      { name: 'AdAutomation', event: 'Campaign auto-launched in GTA-001', confidence: 0.91, status: 'ok' }
    ]

    await supabase.from('drops').insert(drops)
    await supabase.from('kpi').insert(kpi)
    await supabase.from('agents').insert(agents)

    return NextResponse.json({ ok: true, message: 'Demo data successfully populated' })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message })
  }
}
