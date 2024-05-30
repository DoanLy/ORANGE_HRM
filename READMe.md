# Orange HRM Site Automation

This is my cypress project.

#### Project website link: https://opensource-demo.orangehrmlive.com/ <br>

---

## Technology: <br>

- Automation Framework: Cypress <br>
- Build tool: npm <br>
- Bundled Tools: Mocha, Chai
- Language: Javascript <br>
- Report: Cypress Cloud<br>
- Project Structure: Page object Model (POM)<br>
- IDE: Visual Studio Code <br>

---

## Project Architecture: <br>

![Cypress_project_Arch](DOC/POMworkflows.png)

---

## Test scenario:<br>

<ol>
<li>Automate Login Function</li>

- Login with correct credentials
- Login with incorrect credentials

<li>Automate Admin Function</li>

- Add a user to the system
- Add a user to the system with existing username
- Add a job
- Delete a job

<li>Automate PIM Function</li>

- Add an employee
- Edit an employee
- Delete an employee

<li>Automate Recruitment Function</li>

- Add a vacancy
- Delete a vacancy

<li>Automate Maintenance Function</li>

- Access to maintenance mode
- Access to maintenance mode with incorrect credentials

<li>Automate Buzz Function</li>

- Create a post
- Like a post
</ol>

---

## Run the Automation Script:

1. Open cmd to the project folder using VS Code
2. Type this command:
   npm run test
3. After Complete the test execution Report will generate to reports Folder
4. Run the index.html file using any live server extension(e.g. Live Server) to view the html report

---

## Test Report view from Command line:

![Screenshot from 2022-01-28 16-20-22](DOC/reportCMD.png)

## Test Report view from HTML report:

![Screenshot from 2022-01-28 16-31-53](DOC/reportHTML1.png)

![Screenshot from 2022-01-28 16-30-39](DOC/reportHTML2.png)

![Screenshot from 2022-01-28 16-32-55](DOC/reportHTML_detail_pass.png)

![Screenshot from 2022-01-28 16-32-55](DOC/reportHTML_detail_fail.png)

## Test Report view from Cypress Dashboard:

![Screenshot from 2022-01-28 16-31-53](DOC/report_cloud1.png)
![Screenshot from 2022-01-28 16-30-39](DOC/report_cloud2.png)
