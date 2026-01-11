# AIESEC Finance & Legal (FnL) Guide

Welcome! This is the official website code for the **AIESEC Finance & Legal Guide**. 
This website serves as an interactive handbook for AIESEC members, covering important topics like:
- **Fundamentals:** Basic financial concepts.
- **Operations:** Standards, reporting, and auditing.
- **Governance:** Legal frameworks and decision-making boards (EFB/GFB).
- **Compendium:** The national legal and procedural backbone.
- **Tools & Glossary:** Helpful resources for daily operations.

---

## 🚀 How to Run this Website (For Non-Technical Users)

If you want to view or edit this website on your computer, just follow these simple steps.

### Step 1: Install the Necessary Software
To run this website, you need a program called **Node.js**. It's like the engine that runs the code.

1. Go to the [Node.js Website](https://nodejs.org/).
2. Download the version that says **"LTS"** (Long Term Support) - this is the most stable version.
3. Install it just like you would install any other program on your computer.

### Step 2: Open the Project Folder
1. Locate the folder `fnl-guide` on your computer (where this file is located).
2. Right-click inside the folder and look for an option like **"Open in Terminal"** or **"Open PowerShell window here"**. 
   * *Mac users:* You can drag the folder icon onto your Terminal app.

### Step 3: Install Dependencies (Do this once)
Before you run the website for the first time, you need to download the "parts" that make it work.

1. In the terminal window that popped up, type the following command and press **Enter**:
   ```bash
   npm install
   ```
2. You will see some text scrolling and progress bars. Wait for it to finish. It might take a minute.

### Step 4: Run the Website!
Now you are ready to launch the site.

1. In the same terminal window, type this command and press **Enter**:
   ```bash
   npm run dev
   ```
2. You will see a message saying something like:
   ```
   ➜  Local:   http://localhost:5173/
   ```
3. **Control + Click** that link (or copy and paste `http://localhost:5173/` into your web browser like Chrome).

**🎉 Congratulations! You should now see the website running locally on your machine.**

---

## 🛑 How to Stop
When you are done, go back to the terminal window and press **Ctrl + C** on your keyboard to stop the server.

## 🆘 Common Issues
- **"npm is not recognized..."**: This means Node.js wasn't installed correctly. Try restarting your computer after installing Node.js.
- **The page is blank?**: Check the terminal for any red error messages.

---

*Made with 💙 for AIESEC*
