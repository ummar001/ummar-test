
This project introduces a notification page accessible at [http://localhost:3000/notifications](http://localhost:3000/notifications). The notification page facilitates the creation of push notifications with customizable options.

## Project Structure

src/
|-- pages/
| |-- notifications/
| | |-- index.tsx
| | |-- components/
| | | |-- ToggleSwitch.tsx
| | | |-- switch.module.css



At the beginning of the project, I encountered several issues, including problems with the configuration of my application, dependencies, and difficulties in loading and running the application. I had to make various changes to configuration files, scripts, and dependencies to resolve these issues. Additionally, I faced problems with serializable values in the Redux store and made adjustments to address them.

- **`pages/notifications/`**: Primary directory for the notification page.
  - **`index.tsx`**: Main file for the notification page.
  - **`components/`**: Reusable components (e.g., `ToggleSwitch.tsx`).
  - **`styles/`**: Styles specific to the notification page (e.g., `switch.module.css`).

## Project Configuration and Setup

Several configurations and setup steps were performed during the project initiation:

1. **Updated `.env` variables.**
2. **Added setup script in `setup.bat`.**
3. **Resolved `caniuse-lite` warning.**
4. **Updated `environment.ts`.**
5. **Installed `lottie-web` and `lottie-react`.**
6. **Added conditional Lottie rendering.**

### Running the Project

To run the project, follow these steps:

1. **Setup:**
    ```bash
    npm run setup
    ```

2. **Start the Development Server:**
    ```bash
    npm run dev
    ```

This will launch the application, and the notification page can be accessed at [http://localhost:3000/notifications](http://localhost:3000/notifications).
