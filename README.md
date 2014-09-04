# Modulus SSL Example

A simple static server, serving up a page to help instruct the public about what working SSL looks like.

## Running

    $ node site
    Server listening on port 8080

## Deploying to Modulus

No special process is required. The server will use `process.env.PORT` if available.

    $ modulus deploy -p <project name>
