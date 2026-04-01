
-- Add restrictive SELECT policy: only service_role can read contact messages
CREATE POLICY "Only service role can read contact messages"
ON public.contact_messages
FOR SELECT
TO service_role
USING (true);

-- Add restrictive UPDATE policy: only service_role can update
CREATE POLICY "Only service role can update contact messages"
ON public.contact_messages
FOR UPDATE
TO service_role
USING (true);

-- Add restrictive DELETE policy: only service_role can delete
CREATE POLICY "Only service role can delete contact messages"
ON public.contact_messages
FOR DELETE
TO service_role
USING (true);
