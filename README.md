# Frontend Code Challenge

This is a code challenge to EasyLex by Rigoberto Alcantar Aguilar.

Enjoy!

## Web Email Client

This Single Page Application will be a email client and we have to show a list of email on the left side, each element of the list has two states, read and unread. When user clicks an element in the list it changes to read.

Inside the email detail we’ll see the full information, like who sent it, body text, attachments, etc. Also the ui have to be responsive for iPad


### Required Behavior

    Email list:
    * When user clicks on each element, it should display the email detail on the right side
    * Highlight email element on click
    * Every 90 seconds, two new emails should appear on the top of the list (emulating new emails received)
    * Option to switch between inbox and spam view
    * Filter by is a dropdown to switch between Inbox, Spam and Deleted emails
    * Search bar search in the current section Inbox, Spam or Deleted 

    Email Detail Actions:
    * Mark as unread
    * Mark as spam
    * Delete

### Constraints
    * Avoid use any CSS framework like bootstrap, foundation, etc.
    * Don’t use create-react-app


### Points to evaluate
    * File architecture
    * React components
    * Redux State/Store
    * Sass files
    * Responsive
    * Animation/Transitions

### Style guide
    * Font family: Helvetica
    * Font size: 12px
    * Font color: #3B3D3F
    * Body bg: #EEF4F9
    * Red: #FC3401
    * Blue: #03B9ED
    * Blue bg: #EEFAFF
    * Gray: #F4F5F5

### Note:
    * We'll provide a JSON as API to get the email list (mail-data.json).