# HTTP examples
This reading explores the contents of HTTP requests and responses in more depth.

## Request Line
Every HTTP request begins with the request line.

This consists of the HTTP method, the requested resource and the HTTP protocol version.

`GET /home.html HTTP/1.1`

In this example, `GET` is the HTTP method, `/home.html` is the resource requested and HTTP 1.1 is the protocol used.
## HTTP Methods
HTTP methods indicate the action that the client wishes to perform on the web server resource.

Common HTTP methods are:
| HTTP Method | Description                                                |
|-------------|------------------------------------------------------------|
| GET         | The client requests a resource on the web server.          |
| POST        | The client submits data to a resource on the web server.   |
| PUT         | The client replaces a resource on the web server.          |
| DELETE      | The client deletes a resource on the web server.           |
| PATCH       | The client partially updates a resource on the web server. |

## HTTP Request Headers
After the request line, the HTTP headers are followed by a line break.

There are various possibilities when including an HTTP header in the HTTP request. A header is a case-insensitive name followed by a: and then followed by a value.

Common headers are:
```txt
Host: example.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en
Content-type: text/json
```
- The `Host` header specifies the host of the server and indicates where the resource is requested from.
- The `User-Agent` header informs the web server of the application that is making the request. It often includes the operating system (Windows, Mac, Linux), version and application vendor.
- The `Accept` header informs the web server what type of content the client will accept as the response.
- The `Accept-Language` header indicates the language and optionally the locale that the client prefers.
- The `Content-type` header indicates the type of content being transmitted in the request body.
## HTTP Request Body
HTTP requests can optionally include a request body. A request body is often included when using the HTTP POST and PUT methods to transmit data.
```txt
POST /users HTTP/1.1
Host: example.com

{
 "key1":"value1",
 "key2":"value2",
 "array1":["value3","value4"]
}
```
```txt
PUT /users/1 HTTP/1.1
Host: example.com
Content-type: text/json

{"key1":"value1"}
```
## HTTP Responses
When the web server is finished processing the HTTP request, it will send back an HTTP response.

The first line of the response is the status line. This line shows the client if the request was successful or if an error occurred.

`HTTP/1.1 200 OK` 

The line begins with the HTTP protocol version, followed by the status code and a reason phrase. The reason phrase is a textual representation of the status code.
## HTTP Status Codes
The first digit of an HTTP status code indicates the category of the response: Information, Successful, Redirection, Client Error or Server Error.

The common status codes you'll encounter for each category are:

_1XX Informational_
| Status Code | Reason Phrase       | Description                                                                                  |
|-------------|---------------------|----------------------------------------------------------------------------------------------|
| 100         | Continue            | The server received the request headers and should continue to  send the request body        |
| 101         | Switching Protocols | The client has requested the server to switch protocols and the  server has agreed to do so. |

_2XX Successful_
| Status Code | Reason Phrase | Description                                                                                    |
|-------------|---------------|------------------------------------------------------------------------------------------------|
| 200         | OK            | Standard response returned by the server to indicate it  successfully processed the request.   |
| 201         | Created       | The server sucessfully processed the request and a resource was  created.                      |
| 202         | Accepted      | The server accepted the request for processing but the processing  has not yet been completed. |
| 204         | No Content    | The server successfully processed the request but is not returning  any content.               |

_3XX Redirection_
| Status Code | Reason Phrase     | Description                                                                    |
|-------------|-------------------|--------------------------------------------------------------------------------|
| 301         | Moved Permanently | This request and all future requests should be sent to the  returned location. |
| 302         | Found             | This request should be sent to the returned location.                          |

_4XX Client Error_
| Status Code | Reason Phrase      | Description                                                                                                                                                                                                                                   |
|-------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 400         | Bad Request        | The server cannot process the request due to a client error, e.g.,  invalid request or transmitted data is too large.                                                                                                                         |
| 401         | Unauthorized       | The client making the request is unauthorized and should  authenticate.                                                                                                                                                                       |
| 403         | Forbidden          | The request was valid but the server is refusing to process it. This is  usually returned due to the client having insufficient permissions  for the website, e.g., requesting an administrator action but the  user is not an administrator. |
| 404         | Not Found          | The server did not find the requested resource.                                                                                                                                                                                               |
| 405         | Method Not Allowed | The web server does not support the HTTP method used.                                                                                                                                                                                         |

_5XX Server Error_
| Status Code | Reason Phrase         | Description                                                                                                     |
|-------------|-----------------------|-----------------------------------------------------------------------------------------------------------------|
| 500         | Internal Server Error | A generic error status code given when an unexpected error or  condition occurred while processing the request. |
| 502         | Bad Gateway           | The web server received an invalid response from the  Application Server.                                       |
| 503         | Service Unavailable   | The web server cannot process the request.                                                                      |

## HTTP Response Headers
Following the status line, there are optional HTTP response headers followed by a line break.

Similar to the request headers, there are many possible HTTP headers that can be included in the HTTP response.

Common response headers are:
```txt
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html
```
- The `Date` header specifies the date and time the HTTP response was generated.
- The `Server` header describes the web server software used to generate the response.
- The `Content-Length` header describes the length of the response.
- The `Content-Type` header describes the media type of the resource returned (e.g. HTML document, image, video).
## HTTP Response Body
Following the HTTP response headers is the HTTP response body. This is the main content of the HTTP response.

This can contain images, video, HTML documents and other media types.
```txt
HTTP/1.1 200 OK
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html

<html>
  <head><title>Test</title></head>
  <body>Test HTML page.</body>
</html>
```
# Other Internet Protocols
Hypertext Transfer Protocols (HTTP) are used on top of Transmission Control Protocol (TCP) to transfer webpages and other content from websites.

This reading explores other protocols commonly used on the Internet.

## Dynamic Host Configuration Protocol (DHCP)
You've learned that computers need IP addresses to communicate with each other. When your computer connects to a network, the Dynamic Host Configuration Protocol or DHCP as it is commonly known, is used to assign your computer an IP address.

Your computer communicates over User Datagram Protocol (UDP) using the protocol with a type of server called a DHCP server. The server keeps track of computers on the network and their IP addresses. It will assign your computer an IP address and respond over the protocol to let it know which IP address to use. Once your computer has an IP address, it can communicate with other computers on the network.

## Domain Name System Protocol (DNS)
Your computer needs a way to know with which IP address to communicate when you visit a website in your web browser, for example, `meta.com`. The Domain Name System Protocol, commonly known as DNS, provides this function. Your computer then checks with the DNS server associated with the domain name and then returns the correct IP address.

## Internet Message Access Protocol (IMAP)
Do you check your emails on your mobile or tablet device? Or maybe you use an email application on your computer?

Your device needs a way to download emails and manage your mailbox on the server storing your emails. This is the purpose of the Internet Message Access Protocol or IMAP.

## Simple Mail Transfer Protocol (SMTP)
Now that your emails are on your device, you need a way to send emails. The Simple Mail Transfer Protocol, or SMTP, is used. It allows email clients to submit emails for sending via an SMTP server. You can also use it to receive emails from an email client, but IMAP is more commonly used.

## Post Office Protocol (POP)
The Post Office Protocol (POP) is an older protocol used to download emails to an email client. The main difference in using POP instead of IMAP is that POP will delete the emails on the server once they have been downloaded to your local device. Although it is no longer commonly used in email clients, developers often use it to implement email automation as it is a more straightforward protocol than IMAP.

## File Transfer Protocol (FTP)
When running your websites and web applications on the Internet, you'll need a way to transfer the files from your local computer to the server they'll run on. The standard protocol used for this is the File Transfer Protocol or FTP. FTP allows you to list, send, receive and delete files on a server. Your server must run an FTP Server and you will need an FTP Client on your local machine. You'll learn more about these in a later course.

## Secure Shell Protocol (SSH)
When you start working with servers, you'll also need a way to log in and interact with the computer remotely. The most common method of doing this is using the Secure Shell Protocol, commonly referred to as SSH. Using an SSH client allows you to connect to an SSH server running on a server to perform commands on the remote computer.

All data sent over SSH is encrypted. This means that third parties cannot understand the data transmitted. Only the sending and receiving computers can understand the data.

## SSH File Transfer Protocol (SFTP)
The data is transmitted insecurely when using the File Transfer Protocol. This means that third parties may understand the data that you are sending. This is not right if you transmit company files such as software and databases. To solve this, the SSH File Transfer Protocol, alternatively called the Secure File Transfer Protocol, can be used to transfer files over the SSH protocol. This ensures that the data is transmitted securely. Most FTP clients also support the SFTP protocol.
# Knowledge Check - The Web and the Internet
## Question 1
When sending a message to another computer, the source and destination are specified using  ________________.
A. a Domain Name

B. a Web Server

**C. an IP Address**

When sending a message to another computer, the source and destination are specified using an IP Address. Explain: The source and destination of an IP packet are specified using an IP address.
## Question 2
Which of the following are valid IP addresses? Select all that apply.
- [X] 192.0.2.235
- [ ] example.com
- [X] 4527:0db8:0a00:1567:0200:ff00:0042:8329

Explain: this an IP address for protocol version 4 and this is an IP address for protocol version 6
## Question 3
When using TCP, data can arrive out of order.

**A. True**

B. False

This is true statement. Explain: Data sent via TCP can arrive out of order, but the protocol ensures it's reordered correctly before delivery to the application.

## Question 4
Which of the following are valid HTTP methods? Select all that apply.
- [X] GET
- [X] POST
- [ ] SEND
- [X] DELETE
Explain: GET is used to retrieve data from the server. POST is used to send data to the server. DELETE is used to delete data on the server.
## Question 5
HTML describes the structure and content of a web page.
**A. True**

B. False

It is true statement. Explain: HTML uses markup tags to describe the structure and content of a web page.
## Question 6
When you type a website address (for example, coursera.org) in your web browser, which protocol is used to find the IP address of the website?

A. Internet Message Access Protocol (IMAP)

B. File Transfer Protocol (FTP)

**C. Domain Name System Protocol (DNS)**

The correct answer is DNS. Explain: The DNS protocol will return the IP address for a domain name.

## Question 7
A web application is more ________________ compared to a website.

A. Informative

**B. Interactive**

A web application is more interactive compared to a website. Explain: Web applications are interactive, for example, using a web app to find local restaurants.
# Exercise: Examine a web page
## Introduction
In this exercise, you will practice examining an HTML page using the developer tools.
## Goal
Inspect the HTML document using the developer tools in your browser.
## Objectives
Find the HTML ID of the Little Lemon logo.
## Instructions
**Step 1:** Download the following file on your local system.

[examine_the_page](https://d3c33hcgiwev3.cloudfront.net/87FmqOJ9RLqxZqjifZS6wg_49b1f0d2659c4a8ea0cf9e9db16505e1_examine_the_page.zip?Expires=1725840000&Signature=efxI6x~I6CaSkMruhel9kSMeybNIHUJhate75PG5MPA1Sc8sHVWNagA4Y9faDXF01nvUgkh6cdCT8SLmUlOFLDSaGDtlnLqmSjtBkNQmQJhN~Ukn2kAmAEEueSi~OII4mVhYFkI06SJf07oqUzmL1YYdttpMs5HsxxpRoDR5WfQ_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

**Step 2:** Unzip the file.

<ins>On Windows</ins>, open your Downloads folder, right-click the file _examine_the_page.zip_ and select Extract All.

![Pb-z1BKOT2y_s9QSji9sUQ_2d7edd4bc1e744b68194e2b170c327e1_windows_unzip](https://github.com/user-attachments/assets/11156be2-b1c7-4994-baee-fdad070487bc)

<ins>On Mac</ins>, open your Downloads folder and double click the file _examine_the_page.zip_.

Once unzipped, there will be a folder named _examine_the_page_.

**Step 3:** Open the folder and double click index.html to view the file in your local web browser. Verify that it looks like this:

![x4JuIEfETeeCbiBHxI3n-w_f7de1bf8d53c4dbcb83e55ed431c77a1_Examine-Web-Page](https://github.com/user-attachments/assets/b343da15-c590-466a-b470-377d32d734c1)

**Step 4:** Right-click the Little Lemon logo and select Inspect (or Inspect Element)

![XtHleW-UQQmR5XlvlEEJmQ_291e0b5151d145239a7565ca438838e1_little_lemon_logo_right_click](https://github.com/user-attachments/assets/7762b942-7504-4068-ab2e-3df8af7a49bb)

**Step 5:** Inspect the line in the HTML for the logo in the developer tools panel. The line begins with <img.

**Note:** In the line, there is an ID in the following format id="???". Note the value that the ID is equal to.

![zG_k-s5KRLKv5PrOSvSyOA_a9c515ff782f4404b7f94d129b2afaa1_examine_page_inspect_logo](https://github.com/user-attachments/assets/5fb79e79-c5cf-44d5-aa69-8eb72ed1a4b9)

![CAQajjMWTkSEGo4zFm5E6A_4e64364cd2704391a31ddb8a2956eba1_examine_page_inspect_logo_id](https://github.com/user-attachments/assets/b5803835-428f-4c31-94bb-d7a57c03e976)

## Tips
- If you get stuck, close the developer tools and start over.
- Review the lesson _Developer Tools_.
# Self-review: Examine a Page
After completing the _Examine a Page_ exercise, answer the self-review quiz below.
## Question 1
What is the value of the _ID_ attribute for the Little Lemon logo?

**A. logo1**

B. lemon

C. little

D. logo

Explain: The HTML defined the ID attribute value as `logo1`.
# Exercise: Edit a website using a browser developer tools
## Introduction
In this exercise, you will practice editing an HTML page using the developer tools.
## Goal
Edit the HTML document using the developer tools in your browser.
## Objectives
Change the text of Our Menu to Little Lemon Menu.
## Instructions
**Step 1:** Download the following file on your local system.

_Note: If you have completed the exercise Examine the Page, you can skip steps 1 and 2 as the file contains the same assets from that exercise._

[examine_the_page.zip](https://github.com/user-attachments/files/16918965/examine_the_page.zip)

**Step 2:** Unzip the file.

<ins>On Windows</ins>, open your Downloads folder, right-click the file _examine_the_page.zip_ and select Extract All.

![Pb-z1BKOT2y_s9QSji9sUQ_2d7edd4bc1e744b68194e2b170c327e1_windows_unzip](https://github.com/user-attachments/assets/a092ddf9-5267-4afa-b71c-7eb57600b3a9)

<ins>On Mac</ins>, open your Downloads folder and double click the file _examine_the_page.zip_.

Once unzipped, there will be a folder named _examine_the_page_.

**Step 3:**  Open the index.html file in your local browser for preview. Verify that it looks like this:

![x4JuIEfETeeCbiBHxI3n-w_f7de1bf8d53c4dbcb83e55ed431c77a1_Examine-Web-Page](https://github.com/user-attachments/assets/4f26519b-f48e-4634-bb3a-aee3a160bbfb)

Step 4: Right-click the `Our Menu` text and select `Inspect` or `Inspect Element`.

![gdNgWlJMRoKTYFpSTIaCzA_166b1e56be704cb0b6bff1ec50d25fe1_little_lemon_menu_right_click](https://github.com/user-attachments/assets/9bfa0808-39c8-4e0c-959c-4233771cd22b)

**Step 5:** Double-click the `Our Menu` text in the Elements tab of the developer tools panel.

**Step 6:** Change the text to `Little Lemon Menu`.

**Step 7:** Close the developer tools.

**Step 8:** Verify that the text has changed on the web page.

## Tips
- If you get stuck, close the developer tools and start from the beginning.
- Review the lesson _Developer Tools_.
# Setting up your local development environment
This reading walks you through the steps to set up an Integrated Development Environment, or IDE, on a Windows and on a Mac (further down below).

The IDE you'll be using in the course is Visual Studio Code, which Microsoft provides for free and comes with a wealth of plugins and extensions to make your life as a developer easier.

You have two options for using Visual Studio Code to complete your course activities:

**Option 1: Use Visual Studio Code in-browser with Coursera Labs**

Coursera’s platform offers an in-browser version of Visual Studio Code which is preconfigured and requires no local setup. You can access the Visual Studio Code environment through the “Lab” items included in this course. Your work and files will be saved and available within this in-browser lab while you have course access.

**Option 2: Work on your local device**

You can also choose to complete your work on your local machine if you prefer. This will require a few steps of set up in advance. 

First, you need to download the IDE from Microsoft's website - 
https://code.visualstudio.com/download
.

Select the download based on your operating system.
## Windows
**Step 1:** Download the Windows installer.

**Step 2:** Open the file to install it once the download is complete.

**Step 3:** Review and accept the license agreement, then click Next.

![TeSdxAIyT9akncQCMu_WCg_dc61e3426d5a415c9e8f829a454100e1_vscode_license](https://github.com/user-attachments/assets/c03f3cfb-cb4c-449d-aac5-3177e9d19599)

**Step 4:** Keep the default value when prompted for the destination location and click next.

![0Y-Mnkn7R5ePjJ5J-4eXLQ_51f84f2dfeb2499f84920479d31d30e1_vscode_install_location](https://github.com/user-attachments/assets/1e4c18e9-8073-45e6-b706-e2e4e5a0d3f7)

**Step 5:** On the additional tasks view, make sure that Add to PATH is selected. 

<img width="593" alt="WeN1y7npSRKjdcu56RkS_A_e709d0ae5b0b4b0aa642d19bf54410e1_path_selected" src="https://github.com/user-attachments/assets/ead8f157-c0c5-44d0-9a6f-12976942f259">

**Step 6:** Click next.

**Step 7:** Click install when the ready to install page appears.

![aT4O1Cm2TCW-DtQpthwlSA_37824f02f7f1487eb4395d14e83b9ce1_vscode_ready_to_install](https://github.com/user-attachments/assets/5ac42b29-ba6c-4549-87b5-73d429eae518)

**Step 8:** Click finish once completed, and the application will launch.

## Mac
**Step 1:** Download the application based on the chipset you have. M1 macs use Apple Silicon, and older Macs use Intel. If you are not sure, choose the Universal option.

**Step 2:** Go to your Downloads folder once the download is complete. 

**Step 3:** Double-click the zip file to extract the contents.

**Step 4:** Drag and drop the .app file to the application link in Finder below.

<img width="829" alt="zP4Uz-1yTQa-FM_tcp0GrQ_661fd9077a54491b8f616d4c01b4d8e1_mac_install_app" src="https://github.com/user-attachments/assets/890206ec-9fe0-4bcd-86e8-230702d94dc6">

**Step 5:** Open the app.

## Linux

Please refer to the 
[official Linux installation guide](https://code.visualstudio.com/docs/setup/linux)
 for Visual Studio Code.

## Selecting a working directory
Now that you have Visual Studio Code set up create a folder on your device that you'll use to do course exercises.

Open Visual Studio Code, go to `File` and select `Open Folder`. Using the file browser, select the folder you just created.

Congratulations, you're set up now to begin writing some code.
# Visual Studio Code on Coursera
In addition to having Visual Studio Code installed on your own computer, in this course and throughout this program, you'll have the opportunity to work in Visual Studio Code right here on Coursera!   

As you progress through the course, you'll be able to write code in hands-on activities called Labs.  In these labs you'll be able to open Visual Studio Code and start writing code without ever leaving the course.

You'll have plenty of opportunities to see Labs in action later in the course, but for now, use the images below as a visual guide to how Labs will look and operate in your browser.

![vGowNP9VQ-iqMDT_VQPoGg_8b07efd976544e35a6f193cac219c4f1_Screen-Shot-2022-06-24-at-3 39 41-PM](https://github.com/user-attachments/assets/6749cd59-af49-40af-98bb-b9589b0bcdc8)

The Labs contain instructions explaining the coding task.

![iKUP2iD8QV-lD9og_LFfqw_7c22d2f4938c48a18c9cf8d9e1613cf1_Screen-Shot-2022-06-24-at-12 54 48-PM](https://github.com/user-attachments/assets/e7125012-483c-4728-bab9-1b585437efcf)

When you click the button to open the lab, a new tab will open with Visual Studio Code already setup and ready for you to start writing code!

![j2bI-PfPRP2myPj3z7T9RQ_d20ba050929b4f13b1cdecf66973caf1_Screen-Shot-2022-06-24-at-3 42 35-PM](https://github.com/user-attachments/assets/e9438aaf-34e6-4cea-96d2-59c44582f8fe)

You'll see all the files for the lab in the Project folder in the left sidebar.

![Lj6w04QzSnG-sNOEM7pxzQ_ff173aadfaed42edb87ca2c1638ab8f1_files](https://github.com/user-attachments/assets/d455332a-4f0d-41e8-a497-8def904ce243)

And the large editor area where you write your code for the lab.

![0I0KDNoPQsONCgzaD2LDjw_ecc373151e254b37a17f200b026ba4f1_editor](https://github.com/user-attachments/assets/12daacf0-dec0-4d59-a22c-b96317089ba7)

You may need to use a tool called the Terminal from time to time to complete course activities. You can open this by selecting the Terminal option in the upper Visual Studio Code toolbar.

![GE5YoBvqT9-OWKAb6m_fKQ_f929f837d3d74250b00d1603fb3c09f1_VSCode-Terminal-Example](https://github.com/user-attachments/assets/e417bcdf-84c6-4df6-94f4-10f421964dcf)

## How to download files from your Visual Studio Code Lab to your local device

1. Select the **Lab Files** button in your Lab Toolbar. 
2. You'll be able to download your full workspace, specific folders, or individual files through the checkbox selection tool. 
3. After you've selected these files, use the Download link to download your files to your local device. 

![ghF76i7AT7GRe-ouwL-x7w_70c41b2336dc4f71bb3d2d43debb3bf1_Lab-VSCode-File-Download](https://github.com/user-attachments/assets/2d51cd14-bb95-4864-9e31-a5855606adf0)

## How to upload local files to your Visual Studio Code Lab

If you'd like to upload your course files from your local device to your Visual Studio Code lab, **drag and drop** your file from your local device into the Visual Studio Code file tree.

![5cTZREu6TPeE2URLumz3Aw_534ba92baca54f6caf5ecd5868f9f7f1_VSCode-File-Upload](https://github.com/user-attachments/assets/cccc36e0-ccb0-4bf8-89d0-38839b82789c)

## How to get a fresh copy of course-provided starter files

Your work will be saved and persist within your Visual Studio Code lab while you are enrolled in the course. If you'd like to get a fresh copy of the original instructor-provided files at any time, you can do this through the **Lab Help** option in your Lab Toolbar.  Don't worry - your original work and files will still remain in your lab until you personally remove or delete them, even when refreshing your files through the steps below.

1. First rename your original files to something like _[yourfilename] [original].[your file extension]`_. You can do this by right-clicking on your file in the Visual Studio Code file tree, selecting Rename, and providing a new file name.
- For example for index.html, this could be renamed to `index [original].html`

2. Select **Lab Help** from your Lab Toolbar and then select **Get latest version**. 

![uvEGQQCcTbKxBkEAnP2ykg_dc267fc7d0d94384b64a731a39e8d5f1_Refresh-Lab-Files](https://github.com/user-attachments/assets/9a7062c3-eab4-4293-8a0d-d3458ecbca1d)

3. You should now see a fresh copy of the original instructor-provided files in your lab, in addition to your own  (renamed) files.
# Knowledge Check - Core Internet Technologies
## Question 1
Which of the following can be done using the developer tools in your browser? Select all that apply. 
- [X] Inspect the HTML elements of a web page.
- [X] CHeck Javascript error logs
- [X] Inspect a timeline of HTTP requests and responses.
- [ ] Upload images to the web server.
- [X] Inspect the performance and memory page of a webpage.

Explain: The Elements tab of the web browser's developer tools allows you to inspect the HTML of a web page. JavaScript error logs will be output in the Console tab of the web browser's developer tools. The Network tab of the web browser's developer tools allows you to inspect the timeline of HTTP requests and responses. The Performance and Memory tabs of the web browser's developer tools allow you to inspect how the web browser is performing while displaying your web page.

## Question 2
In software development, a library provides _________________________.

**A. Reusable pieces of code that can be used by your application.**

B. A structure for developers to build an application with.

In software development, a library provides reusable pieces of code that can be used by your application. Explain: Libraries help you to be more efficient while developing your application by providing you with reusable code.

## Question 3
In software development, an API is _________________________.

**A. a set of functions that an application component or service can provide.**

B. a text editor to write code with.

In software development, an API is a set of functions that an application component or service can provide. Explain: As a developer you’ll use APIs to interact with application components and services.
## Question 4
Which of the following are benefits of using an Integrated Development Environment (IDE) such as Visual Studio Code? Select all that apply.

- [X] Syntax Highlighting
- [X] Error Highlighting
- [X] Autocomplete
- [ ] Autodelete
- [X] IntelliSense

Explain: IDEs will highlight keywords in programming languages for you. IDEs will display syntax errors for you. IDEs will suggest code while you type. IDEs will help you rename functions and change function parameters throughout your application.
# Module Quiz: Get started with Web Development
## Question 1
When two computers connect directly to each other, this forms  ______________.

A. the Internet

**B. a Network**

C. a Server

When two computers connect directly to each other, this forms a network.

## Question 2
The programs that run on a computer are called the ______________.

A. Hardware

**B. Software**

The programs that run on a computer are called the software.

## Question 3
The structure of a web page is defined using ______________.

**A. HTML**

B. CSS

C. Javascript

The structure of a web page is defined using HTML. Explain: HTML defines the structure and content of a web page.

## Question 4
The style of a web page is defined using ______________.

A. HTML

**B. CSS**

C. Javascript

The style of a web page is defined using CSS. Explain: CSS defines how HTML elements are displayed on a web page.

## Question 5
Computers communicate with each other using which protocol?

A. Network Protocol

B. Mail Protocol

C. Mobile Protocol

**D. Internet Protocol**

The correct answer is Internet Protocol. Explain: Internet Protocols version 4 and 6 are most commonly used for communication.

## Question 6
To communicate with another computer on a network, your computer sends a message called an __________________.

**A. IP Packet**

B. IP Mail

C. IP Container

To communicate with another computer on a network, your computer sends a message called an IP Packet. Explain: IP packets contain the data being sent between computers.

## Question 7
The web browser and web server use which protocol to transfer data?

A. DNS

B. SMTP

**C. HTTP**

D. IMAP

The correct answer is HTTP. Explain: HTTP is used to transfer HTML documents, images and files to the web browser.

## Question 8
In software development, a framework provides a structure for developers to build an application.

**A. True**

B. False

It is true statement. Explain: Frameworks allow developers to build applications quicker by providing a structure to build with.

## Question 9
As a developer, it is best to use a _____________ to write and maintain code.

A. Word Processor

**B. Integrated Development Environment**

C. Web Browser

D. Development Book

As a developer, it is best to use a Integrated Development Environment to write and maintain code. Explain: You will use an Integrated Development Environment to effectively and efficiently write and maintain code.

## Question 10
In software development, an API is a set of functions that an application component or service can provide.

**A. True**

B. False

It is true statement. Explain: As a developer you will interact with many APIs while developing applications.
# Additional Resources
Here is a list of resources that may be helpful as you continue your learning journey.
- [HTTP Overview (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [Introduction to Networking by Dr.Charles R Severance](https://www.amazon.com/Introduction-Networking-How-Internet-Works/dp/1511654945/)
- [Chrome Developer Tools Overview (Google)](https://developer.chrome.com/docs/devtools/overview/)
- [Firefox Developer Tools User Docs  (Mozilla)](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Getting Started with Visual Studio Code  (Microsoft)](https://code.visualstudio.com/docs)