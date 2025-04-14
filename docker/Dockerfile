# Use the official Playwright image with all supported browsers
FROM mcr.microsoft.com/playwright:v1.43.1-jammy

# Set working directory inside the container
WORKDIR /app

# Setting this environment variable disables certificate verification for all Node.js processes.
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

# Copy package.json and install dependencies first (for better caching)
COPY ./package.json ./
RUN npm install

# Install Playwright and its browsers
RUN npx playwright install --with-deps

# Copy the rest of the project files
COPY ./pages pages/
COPY ./tests tests/
COPY ./fixture.js ./
COPY ./config.js ./
COPY ./playwright.config.js ./


# Run Playwright tests (can override in CI or docker-compose)
CMD ["npm", "run", "e2eheaded"]
