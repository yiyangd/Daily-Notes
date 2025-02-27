import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tpbvqnlhvpnzfiglarib.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwYnZxbmxodnBuemZpZ2xhcmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwODQyNjMsImV4cCI6MjA1NTY2MDI2M30.XhLPX0FVuX8SBcskdXa2HPFTcl5CgR_xg4SwZtTWlL0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
