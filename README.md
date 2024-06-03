# Final-Project-Back-end---Dev-Init
งานนี้เป็นโจทย์เสริมทักษะหนึ่งในโครงการค่ายพัฒนาทักษะเพื่อการทำงานจริงสาย Dev/IT โดย BornToDev โดยงานนี้มีเป้าหมายเพื่อพัฒนา API ของเว็บแอปพลิเคชั่นจัดการข้อมูลส่วนตัวที่ให้ผู้ใช้งานสามารถสร้าง To-do List และ Log เพื่อบันทึกเหตุการณ์ประจำวันต่าง ๆ จนไปถึงจัดการปฎิทินของตัวเองได้
## API
| API Path  | Method        | Body               | Description                         |
| -------- | ---------------| ----------------   |-------------------------------------|
| /users/register | POST| {username, email, password}   |Register a new user|
| /users/login | POST| {username?, email, password}   |User login|
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





#### /users/register
* `POST` : ลงทะเบียนผู้ใช้งานใหม่
#### /users/login
* `POST` : login
#### /logs
* `GET` : ดูรายการ daily log ทุกรายการที่ผู้ใช้งานเป็นผู้สร้าง
* `POST` : สร้างรายการ daily log
#### /logs/{:id}
* `GET` : ดูรายการ daily log ที่มี log_id ตรงกับ id
* `PUT` : แก้ไขรายการ daily log ที่มี log_id ตรงกับ id
* `DELETE` :ลบรายการ daily log ที่มี log_id ตรงกับ id
#### /todos
* `GET` : ดูรายการ to-do ทุกรายการที่ผู้ใช้งานเป็นผู้สร้าง
* `POST` : สร้างรายการ to-do
#### /todos/{:id}
* `GET` : ดูรายการ to-do ที่มี todo_id ตรงกับ id
* `PUT` : แก้ไขรายการ to-do ที่มี todo_id ตรงกับ id
* `DELETE` :ลบรายการ to-do ที่มี todo_id ตรงกับ id

#### /events
* `GET` : ดูรายการ event ทุกรายการที่ผู้ใช้งานเป็นผู้สร้าง
* `POST` : สร้างรายการ event
#### /events/{:id}
* `GET` : ดูรายการ event ที่มี event_id ตรงกับ id
* `PUT` : แก้ไขรายการ event ที่มี event_id ตรงกับ id
* `DELETE` :ลบรายการ event ที่มี event_id ตรงกับ id
