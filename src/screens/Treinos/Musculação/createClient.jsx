import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://vngmbwmmeutlygdxsaba.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuZ21id21tZXV0bHlnZHhzYWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4NTI3NTEsImV4cCI6MjAyMDQyODc1MX0.u9-CDWVA-eFjMMmT2NaPGXgrK3gUcAD3BMYnWam1PcA"
);
