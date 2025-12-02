-- Remove the policy that exposes all contact messages to any authenticated user
DROP POLICY "Users can view own submissions" ON public.contact_messages;