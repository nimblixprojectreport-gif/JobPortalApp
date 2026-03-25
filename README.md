# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Company Registration Frontend

## 🎯 Overview

A modern React frontend for company registration and profile management, built for the Job Portal application.

## 🚀 Features

### **FR-12: Company Profile Management**
- ✅ **Multi-step registration form** with progress indicator
- ✅ **Company information fields**: Name, industry, website, size, location
- ✅ **Additional details**: Description, founded year, social media links
- ✅ **Logo upload** with drag-and-drop interface
- ✅ **Form validation** with real-time error handling
- ✅ **Review step** before final submission
- ✅ **Responsive design** for all devices
- ✅ **Modern UI** with smooth animations and transitions

### **Technical Stack**
- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS with custom components
- **Forms**: React Hook Form for validation
- **File Upload**: React Dropzone for logo handling
- **API Integration**: Axios for backend communication
- **Icons**: Lucide React for modern iconography
- **State Management**: React Context for auth and theme

## 📁 Project Structure

```
company-registration/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── contexts/
│   │   ├── AuthContext.js
│   │   └── ThemeContext.js
│   ├── pages/
│   │   ├── CompanyRegistration.js
│   │   └── CompanyDashboard.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation Steps
```bash
cd company-registration
npm install
npm start
```

### Environment Configuration
Create a `.env` file in the root:
```env
REACT_APP_API_URL=http://localhost:8001/api
```

## 🎨 Key Components

### **CompanyRegistration.js**
- Multi-step form with validation
- Logo upload with preview
- Progress indicators
- Responsive design
- Error handling

### **CompanyDashboard.js**
- Company statistics dashboard
- Navigation sidebar
- Stats cards with gradients
- Responsive grid layout

### **AuthContext.js**
- Authentication state management
- Login/logout functionality
- Token management

### **API Integration**
- Axios-based API service
- Proper error handling
- FormData support for file uploads

## 🎨 Features Implemented

### **Registration Flow**
1. **Step 1**: Basic company information
   - Company name, industry, website, size, location
   - Form validation and error handling
   
2. **Step 2**: Additional details
   - Company description, founded year, social media
   - Logo upload with drag-and-drop
   - Image preview functionality
   
3. **Step 3**: Review and submit
   - Review all entered information
   - Final validation before submission
   - Loading states and success feedback

### **UI/UX Features**
- **Responsive Design**: Mobile-first approach
- **Modern Styling**: Tailwind CSS with custom components
- **Smooth Animations**: CSS transitions and hover effects
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Error Handling**: User-friendly error messages
- **Loading States**: Spinners and disabled states

## 🔧 API Integration

### **Endpoints Used**
- `POST /api/users/login/` - Authentication
- `POST /api/companies/register/` - Company registration
- `GET /api/companies/{id}/` - Company details
- `PUT /api/companies/{id}/` - Update company

### **Data Flow**
1. User fills registration form
2. Client-side validation
3. API submission with FormData
4. Backend validation and processing
5. Success response and redirect to dashboard

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Responsive**: Works on all screen sizes
- **Progressive Enhancement**: Graceful degradation

---


