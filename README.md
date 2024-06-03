# Final-Project-Back-end---Dev-Init
งานนี้เป็นโจทย์เสริมทักษะในโครงการค่ายพัฒนาทักษะเพื่อการทำงานจริงสาย Dev/IT โดย BornToDev โดยงานนี้มีเป้าหมายเพื่อพัฒนา API ของเว็บแอปพลิเคชั่นจัดการข้อมูลส่วนตัวที่ให้ผู้ใช้งานสามารถสร้าง Log และ To-do List เพื่อบันทึกเหตุการณ์ประจำวันต่าง ๆ จนไปถึงจัดการปฎิทินของตัวเองได้  งานนี้พัฒนาโดยใช้ nestjs passport.js และ sequelize-typescript

## การวิธีการใช้งาน
ผู้ใช้งานจะต้องทำการลงทะเบียนผ่าน /auth/register โดย username และ email จะต้องไม่ซ้ำกับผู้ใช้งานอื่นๆ เมื่อลงทะเบียนหรือทำการเข้าสู่ระบบสำเร็จ จะได้รับ token เพื่อใช้สำหรับการยืนยันสิทธิ์ในการดำเนินการต่างๆ ทั้งการเรียกดู สร้าง แก้ไข และลบ ข้อมูลต่างๆ ใน Daily Log, To-do List และ Calendar Events  ผู้ใช้งานจะมีสิทธิ์เรียกดู แก้ไข และลบข้อมูลที่ผู้ใช้งานเป็นผู้สร้างเท่านั้น

## โครงสร้างฐานข้อมูล
  งานนี้มีตารางข้อมูล 4 ตาราง ประกอบด้วย Users, Daily Logs, To-Do List และ events
  ### ตาราง users
  | Field  | Type        | Description            | 
| -------- | ---------------| ----------------   |
| user_id | INT| Primary Key   |
| username | VARCHAR(50)| User's username   |
| password | VARCHAR(255)| Hashed password   |
| email | VARCHAR(100)| User's email   |
| created_at | DATETIME | Account creation data  |
| last_login | DATETIME | Last login date  |
### ตาราง Daily Log
  | Field  | Type        | Description            | 
| -------- | ---------------| ----------------   |
| log_id | INT| Primary Key   |
| user_id | INT| Foreign Key from Users   |
| content | TEXT| content of the log   |
| date | DATE| Date of the log in form "YYYY-MM-DD hh:mm:ss"  |
| formattedDate | VIRTUAL| Date of the log in form "DD MM YYYY"  |
| created_at | DATETIME | Creation date of the log |
| update_at | DATETIME | Update date of the log   |

### ตาราง To-Do List
  | Field  | Type        | Description            | 
| -------- | ---------------| ----------------   |
| todo_id | INT| Primary Key   |
| user_id | INT| Foreign Key from Users   |
| title | VARCHAR(100)| Title of the task   |
| description | TEXT| Description of the task   |
| due_date | DATE| Due date in form "YYYY-MM-DD hh:mm:ss"  |
| formattedDate | VIRTUAL| Due date in form "DD MM YYYY"  |
| priority | INT | Priority level |
| status | ENUM('pending', 'completed') | Status of the task |
| created_at | DATETIME | Creation date of the log |
| update_at | DATETIME | Update date of the log   |

### ตาราง Calendar Events
  | Field  | Type        | Description            | 
| -------- | ---------------| ----------------   |
| event_id | INT| Primary Key   |
| user_id | INT| Foreign Key from Users   |
| title | VARCHAR(100) | Title of the event   |
| description | TEXT| Description of the event   |
| start_date | DATE|Start date/time "YYYY-MM-DD hh:mm:ss"  |
| formatted_startDate | VIRTUAL| Start date/time in form "DD MM YYYY hh:mm"  |
| end_date | DATE|End date/time "YYYY-MM-DD hh:mm:ss"|
| formatted_endDate | VIRTUAL| End date/time in form "DD MM YYYY hh:mm"  |
| created_at | DATETIME | Creation date of the log |
| update_at | DATETIME | Update date of the log   |

## API
| API Path  | Method        | Body               | Description                         |
| -------- | ---------------| ----------------   |-------------------------------------|
| /auth/register | POST| {username, email, password}   |Register a new user|
| /auth/login | POST| {username?, email, password}   |User login|
| /logs | GET|   |Get all logs create by user|
| /logs | POST| {content, date}   |Create a new log|
| /logs/{id} | GET, DELETE|   |Get or delete a specific log|
| /logs/{id} | PUT| {content?, date?}  |Update a specific log|
| /todos | GET|   |Get all to-dos create by user|
| /todos | POST| {title, description?, due_date, priority, status}   |Create a new to-do|
| /todos/{id} | GET, DELETE|   |Get or delete a specific to-do|
| /todos/{id} | PUT| {title?, description?, due_date?, priority?, status?}  |Update a specific to-do|
| /events | GET|   |Get all events create by user|
| /events | POST| {title, description?, start_data, end_date}   |Create a new events|
| /events/{id} | GET, DELETE|   |Get or delete a specific events|
| /events/{id} | PUT| {title?, description?, start_data?, end_date?}  |Update a specific events|

## ตัวอย่างการใช้งาน
### การลงทะเบียนผู้ใช้งานใหม่
การลงทะเบียนต้องใช้ข้อมูล username, email และ password เมื่อลงทะเบียนสำเร็จ จะได้รับ token สำหรับใช้ในการยืนยันสิทธิ์ในการดำเนินการต่างๆ

<img width="692" alt="register_success" src="https://github.com/sorajit/Final-Project-Back-end---Dev-Init/assets/81581677/913c8b17-630e-44b8-82f3-42b9652e1964">

หาก username หรือ email ซ้ำกับข้อมูลผู้ใช้งานอื่นจะได้รับข้อความแจ้งเตือน และต้องทำการลงทะเบียนใหม่อีกครั้ง
<img width="706" alt="register_sameEmail" src="https://github.com/sorajit/Final-Project-Back-end---Dev-Init/assets/81581677/ad4de6f1-0aab-42e0-8812-a6779b97722c">
### การเข้าสู่ระบบ
การลงทะเบียนต้องใช้ข้อมูล email และ password หากเข้าสู่ระบบสำเร็จ  จะได้รับ token ดังรูป
<img width="691" alt="login_success" src="https://github.com/sorajit/Final-Project-Back-end---Dev-Init/assets/81581677/ed5846db-fbab-4159-a194-5c322ddb2278">

หากกรอก email หรือ password ผิด จะได้รับข้อความแจ้งเตือนดังรูป
<img width="702" alt="login_fail" src="https://github.com/sorajit/Final-Project-Back-end---Dev-Init/assets/81581677/b511ead1-1890-4ded-b5ed-af1be987261c">

### การสร้าง Daily Log
การดำเนินการต่างๆ ทั้งการเรียกดู สร้าง แก้ไข และลบ ข้อมูลต่างๆ ทั้งใน Daily Log, To-Do List และ Calendar Events จะคล้ายกัน คือจะต้องใช้ token ที่ได้จากการลงทะเบียนหรือการเข้าสู่ระบบ ในการยืนยันในการดำเนินการต่างๆ  วิธีการใช้ token ในการยืนยันสิทธิ์ทำได้โดยนำ token ใส่ไว้ใน "Authorization: Bearer {token}" ในส่วนของ Hearder ซึ่งใน post man สามารถทำได้ดังรูป

<img width="698" alt="log_create_addToken" src="https://github.com/sorajit/Final-Project-Back-end---Dev-Init/assets/81581677/fc646693-7265-40d8-ad7e-d5c35e6de7cf">

การสร้าง Daily Log ทำได้โดยไปที่ /logs และใช้วิธีการ POST โดยจะต้องใช้ข้อมูล content และ date หากทำการสร้างสำเร็จระบบจะแสดงรายละเอียดของ Daily Log ที่สร้างดังรูป 

<img width="696" alt="log_create_success" src="https://github.com/sorajit/Final-Project-Back-end---Dev-Init/assets/81581677/7cb6f4ab-c07e-4389-acb5-c3912caba028">

หากในการดำเนินการต่างๆ ลืมใส่ token ระบบจะแจ้งด้วยข้อความ "Unauthorized" ดังรูป

<img width="881" alt="log_create_unauthorized" src="https://github.com/sorajit/Final-Project-Back-end---Dev-Init/assets/81581677/48b766ba-7955-4ef9-8c85-f9188cb99736">





