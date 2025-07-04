# Base image رسمی Playwright
FROM mcr.microsoft.com/playwright:v1.53.1-jammy

# محل کاری داخل کانتینر
WORKDIR /app

# کپی فایل‌های پروژه
COPY . .

# نصب پکیج‌ها
RUN npm install

# اجرای تست‌ها
CMD ["npx", "playwright", "test"]
