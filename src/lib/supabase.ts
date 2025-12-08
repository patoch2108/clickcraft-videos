import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para TypeScript
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          plan: 'iniciante' | 'criador' | 'vip'
          videos_remaining: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          plan?: 'iniciante' | 'criador' | 'vip'
          videos_remaining?: number
        }
        Update: {
          full_name?: string | null
          avatar_url?: string | null
          plan?: 'iniciante' | 'criador' | 'vip'
          videos_remaining?: number
          updated_at?: string
        }
      }
      videos: {
        Row: {
          id: string
          user_id: string
          original_url: string
          title: string | null
          status: 'processing' | 'completed' | 'failed'
          clips_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          original_url: string
          title?: string | null
          status?: 'processing' | 'completed' | 'failed'
          clips_count?: number
        }
        Update: {
          title?: string | null
          status?: 'processing' | 'completed' | 'failed'
          clips_count?: number
          updated_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          video_id: string
          created_at: string
        }
        Insert: {
          user_id: string
          video_id: string
        }
        Update: {}
      }
    }
  }
}