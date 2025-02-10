# Pymuco Playwright Tests



Automated end-to-end tests for the Pymuco website using **Playwright**. This repository is configured to run tests on every push and pull request using **GitHub Actions**.

## 📌 Features

- ✅ **End-to-end tests** with [Playwright](https://playwright.dev/)
- ✅ **Automated CI/CD** with GitHub Actions
- ✅ **Tests run on Chromium, Firefox, and WebKit**
- ✅ **HTML Reports** generated after each test run

---

## 🚀 Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/pymuco/pymuco_playwright.git
cd pymuco_playwright
```

### 2️⃣ Install Dependencies

Make sure you have **Node.js 18+** installed, then run:

```bash
npm install
npx playwright install --with-deps
```

### 3️⃣ Run Tests Locally

```bash
npx playwright test
```

Run tests in **headed mode** (with browser UI visible):

```bash
npx playwright test --headed
```

View the **HTML report** after running tests:

```bash
npx playwright show-report
```

---

## 🔄 Running Tests in GitHub Actions

This repository is configured to run tests automatically on every **push** and **pull request**.

### ✅ Check test results:

1. Go to the **"Actions"** tab in GitHub
2. Click on the latest **Playwright Tests** run
3. Download the **playwright-report** artifact for detailed results

---

## 📂 Project Structure

```
.
├── .github/workflows/playwright.yml  # GitHub Actions CI workflow
├── tests/                             # Playwright test files
│   ├── pymuco.spec.js                # Main test file for Pymuco
├── playwright.config.js               # Playwright configuration
├── package.json                       # Dependencies
├── README.md                          # This file
```

---

## 🤝 Contributing

Want to contribute? Follow these steps:

1. **Fork** the repository
2. Create a new **branch** (`feature-xyz`)
3. Commit your changes (`git commit -m "Add feature XYZ"`)
4. Push to GitHub (`git push origin feature-xyz`)
5. Open a **Pull Request** 🚀

---

## 📜 License

This project is licensed under the **BSD License**.

---

## 🔗 Links

- [Pymuco Website](https://pymuco.org/)
- [Playwright Documentation](https://playwright.dev/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---
