import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getUserProfile() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("❌ Failed to get Supabase user:", userError);
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    username: user.user_metadata?.username || "Unnamed",
    created_at: user.created_at,
    tier: user.user_metadata?.tier || "Free",
    cardLast4: user.user_metadata?.card_last4 || null,
    cardBrand: user.user_metadata?.card_brand || null,
  };
}

