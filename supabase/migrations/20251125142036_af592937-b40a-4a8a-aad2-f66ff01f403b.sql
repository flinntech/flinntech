-- Create consultation_requests table
CREATE TABLE public.consultation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultation requests (public form)
CREATE POLICY "Anyone can submit consultation requests"
ON public.consultation_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated admins can view requests (for future admin panel)
CREATE POLICY "Admins can view consultation requests"
ON public.consultation_requests
FOR SELECT
TO authenticated
USING (true);

-- Add index for better query performance
CREATE INDEX idx_consultation_requests_created_at ON public.consultation_requests(created_at DESC);