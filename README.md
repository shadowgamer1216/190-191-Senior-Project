## **Synopsis**: 
###   Our goal for Database Revamp is to provide and restore functionality to our client's database
###   through the forms they have provided us. This project establishes a homepage interface
###   that is straightforward to navigate. We've standardized our pages to follow a set
###   template, as well as provide our client with the necessary functionality they no longer
###   have.

## **Project Logo**:
![Project Logo](/src/absolutemedialogo.png "Project/Company Logo")

## **Home Page**:
![Home Page](/public/homepage.png "Home Page")



## **Current implemented features**:
### - Ability to Edit/View forms
### - Insertion into database 
### - Submitting forms
### - Output forms
### - Ability to Search forms
![Edit Page](/public/SearchFeature1.png "Search Selection")
![View Page](/public/SearchFeature2.png "Search Company")




## **Example of one of our developed pages**:
![Product Page](/public/addproduct.png "Add Product Page")

## **Testing instructions**:
  1. No Current Data Set, however, things are tested through submitting test information into the database and using that information to test other functionalities.
  2. Testing is done by going through the pages and adding information one by one (or by page) and seeing if they are being sent into the database and whether or not we are able to pull and populate the test information for viewing/editing or other functionalities based on the specific page. 
  3. To verify if the test information if being pulled correctly, each specific page will contain a primary key. To autopopulate or pull the test information, a user will need to use the drop down menu and select the correct key (ID).
  4. The first page to start testing will be the the Company page. Most tables will pull the Company ID, as it will store the information about the Company(Address, Contacts, etc.). I will also store products that the company will mainly purchase from Absolute Media.
  5. The next pages to test out will be the component page and product page because they contain fields like component ID and product ID which the other pages may need. 
## **Deployment instructions**:
  1. Prerequisite: 
Ensure that clients have Node.js and npm (Node Package Manager) installed on their machine. 

2. Project Setup: 
Extract the ZIP file or clone the Git repository to a location on their local machine, remember this directory.
Rename the project to something else rather than 190-191-Senior-Project, lets say it is named as 'absolutemedia.'

3. Terminal Setup: 
Open a terminal or command prompt on the respective operating system.
- For Windows, use the Command Prompt or Windows PowerShell.
- For macOS, use the built-in Terminal application.
- For Linux, use the default terminal emulator or a preferred one.

4. Navigate to Project Directory:
Type in cd command in terminal to navigate to the directory where the project was extracted. (e.g. cd ...\absolutemedia)

5. Install Dependencies:
Once at the root of the directory (e.g. '...\absolutemedia'), run the following command in the terminal to install the project dependencies: 'npm install'
This will install all dependency packages needed to run the application.

6. Launch Application:
Then finally, run the command: 'npm run app'

## **Developer instructions**:
 1. "npm run app" in terminal (or "Run" in VSCode)
 2. Click buttons to access all pages
 3. Changes to your pages should be committed to our github repo

## **Timeline**:
### Phase 1 (finish by mid-Februrary):
 1. Create tables in database
 2. Test inputting data into database
 3. Determine roles/permissions for users in database
### Phase 2 (finish by mid-March):
 4. Connect our React app to Netbox
    - hosting our app so client can access
 5. Connect our front end to our backend 
    - consume and **save** completed forms
 6. Implement view/edit functions
 ### Phase 3 (additional features if time permits (to middle of May)):
 7. Develop ability to add fields
    - enable client to be self-sufficient
 8. Data analysis/trends
    - most common customers and trends in purchases
    
 ## **Contributions**:
 ### Team Members
 Mea Miller
 - Email address: meamiller@csus.edu
 - Phone number: (916) 333-8036
 
 Jarod Shavor
 - Email address: jarodshavor@csus.edu
 - Phone number: (916) 895-8316
 
 Ethan Ha
 - Email address: nicholasha@csus.edu
 - Phone number: (916) 838-7196
 
 Jared Roque
 - Email address: jroque@csus.edu
 - Phone number: (209) 601-2848
 
 Nataly Avalos
 - Email address: navalos2@csus.edu
 - Phone number: (661) 428-8777
 
 Victor Dumaslan
 - Email address: vdumanslan@csus.edu
 - Phone number: (916) 385-9428
 
 Mark Chavez
 - Email address: markchavez@csus.edu
 - Phone number: (707) 319-6108
 
 Kyler Ng
 - Email address: kylerng@csus.edu
 - Phone number: (925) 785-8632
