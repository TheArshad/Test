# City Elimination Portal - Alcheringa'25

(use combined branch only)
This is the official city-wise registration and event scheduling portal built for **Alcheringa'25**, the annual cultural fest of IIT Guwahati. The platform allows users to:

* 📍 View event schedules across multiple Indian cities.
* 📝 Register for on-ground eliminations in their respective regions.

---

## 🔧 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Django (Python 3.11)
* **Database:** PostgreSQL (local development)

---

## 🚀 Features

* 🗕️ City-specific event schedules and timelines.
* 👥 Participant registration and data collection.
* 🌐 Responsive frontend interface for both desktop and mobile.

---

## 🛠️ Setup Instructions (Cross-platform)

> Ensure you have **Python 3.11** installed on your system. You can verify it with:

```bash
python3 --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/city-elimination-portal.git
cd city-elimination-portal
```

### 2. Create a Virtual Environment

```bash
python3 -m venv .venv
```

### 3. Activate the Virtual Environment

* On **Linux/macOS**:

  ```bash
  source .venv/bin/activate
  ```

* On **Windows** (CMD):

  ```cmd
  .venv\Scripts\activate
  ```

* On **Windows** (PowerShell):

  ```powershell
  .venv\Scripts\Activate.ps1
  ```

---

### 4. Install Dependencies

```bash
pip install --upgrade pip setuptools wheel
pip install -r requirements.txt
```

---

### 5. Set Up the Database (Optional: if using PostgreSQL locally)

> Ensure PostgreSQL is installed and running. You can skip this if not required.

Update `settings.py` with your local DB credentials:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

Then apply migrations:

```bash
python manage.py migrate
```

---

### 6. Run the Development Server

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000/` in your browser 🚀

---

## 📂 Folder Structure

```
city-elimination-portal/
|
├── static/                 # Frontend assets (CSS, JS, images)
├── templates/              # HTML templates
├── app/                    # Main Django app logic
├── manage.py               # Django entry point
├── requirements.txt        # All required Python packages
└── ...
```

---

## 📌 Notes

* If you're using a different version of Python (not 3.11), update the virtual environment and compatibility accordingly.
* In production, use `.env` for sensitive info and configure with `gunicorn` + `nginx`.

---


Made with ❤️ by the Alcheringa Tech Team
