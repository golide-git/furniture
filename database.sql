CREATE EXTENSION IF NOT EXISTS http;

CREATE TABLE IF NOT EXISTS fetched_site_data (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	fetched_at TIMESTAMPTZ NOT NULL DEFAULT now(),
	source_url TEXT NOT NULL,
	status_code INTEGER NOT NULL,
	content_type TEXT,
	response_body TEXT NOT NULL
);

CREATE OR REPLACE FUNCTION fetch_site_data(p_url TEXT)
RETURNS INTEGER
LANGUAGE plpgsql
AS $$
DECLARE
	response http_response;
BEGIN
	IF p_url IS NULL OR p_url !~ '^https?://' THEN
		RAISE EXCEPTION 'URL must start with http:// or https://';
	END IF;

	response := http_get(p_url);
	INSERT INTO fetched_site_data
		(source_url, status_code, content_type, response_body)
	VALUES
		(p_url, response.status, response.content_type, response.content);

	RETURN response.status;
END;
$$;

