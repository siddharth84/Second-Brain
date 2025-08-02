Steps to Follow:
 -npm init -y
 -npm install typescript
 -npx tsc --init
 -npm install express
 -npm install -d @types/express
 -npm install mongoose
 -npm install jsonwebtoken
 -npm install @types/jsonwebtoken
 ` "scripts": {
    "build": "tsc -b",
    "start": "node dist/index.js",
    "dev": "npm run build && npm run start"
  }, `
  -npm run dev
