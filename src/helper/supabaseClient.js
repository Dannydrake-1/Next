import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kjjhecubjexgtisnmwbk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqamhlY3ViamV4Z3Rpc25td2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MzM0NTcsImV4cCI6MjA3NzMwOTQ1N30.ZrNHbzs2UZhvVfPjDOOp_JhchAuqh2O7d0mBB_pI5dw";


const supabase = createClient(supabaseUrl,supabaseAnonKey);
export default supabase; 