# OsdagBridge User Guide

## 1. Introduction

### 1.1 About OsdagBridge

OsdagBridge is a software tool for bridge analysis and design. It provides an integrated interface for defining bridge geometry, structural components, materials, loading, analysis, design, visualization, and report generation.

### 1.2 Purpose of the Software

OsdagBridge helps users model bridge structures and perform analysis and design using the required project inputs, structural parameters, and design options.

### 1.3 Intended Users

OsdagBridge is intended for engineers, bridge designers, students, and other users involved in bridge analysis and design.

### 1.4 What You Can Do with OsdagBridge

Using OsdagBridge, users can define project and bridge geometry, specify structural and material inputs, apply loads, configure analysis and design options, run the design, review results, and generate reports.

## 2. Getting Started

This chapter provides the basic information required to start using OsdagBridge. It covers system compatibility, installation, application launch, and the prerequisites for beginning a bridge analysis and design.

### 2.1 System Requirements

OsdagBridge is currently supported on *Windows* and *Linux* operating systems.

> *Note:* OsdagBridge is not currently supported on *macOS*.

Before installing OsdagBridge, ensure that the system meets the required operating system and software prerequisites.

### 2.2 Installation and Setup

OsdagBridge can be installed using the *single-click download* provided on the OsdagBridge website.

Download the appropriate installer for your operating system from the website and follow the installation instructions provided with the application.

For detailed installation instructions, refer to the *Download* section of the OsdagBridge website.

### 2.3 Launching OsdagBridge

After installation, OsdagBridge can be launched directly using the *OsdagBridge desktop icon* created during installation.

Double-click the desktop icon to start the application.

For additional information on accessing and launching the application, refer to the relevant section of the OsdagBridge website.

### 2.4 First-Time Setup

On the first launch, ensure that the application is installed correctly and that all required components are available on the system.

The user can then proceed to the application interface and begin entering the project inputs required for bridge analysis and design.

### 2.5 Basic Prerequisites

Before starting a bridge design, ensure that the required project information, geometric parameters, material properties, and loading information are available.

The user should also be familiar with the basic bridge design parameters required for the selected design module.

### 2.6 Accessing the Application

Once OsdagBridge has been installed, the application can be accessed through the *OsdagBridge desktop icon*.

Launch the application and proceed to the *Home Screen*, where the available modules and application options can be accessed.

## 3. Home Screen / Main Interface
This section should explain what the user sees when OsdagBridge opens and the purpose of each major area.

![Home Screen](/img/3.1.1.png)
The main areas of the interface are described below.

### 3.1.1 Header and Navigation

The header provides access to the main menus and navigation options available in OsdagBridge.

| Menu / Control | Purpose |
|---|---|
| **File** | Provides options for managing project files and related operations. |
| **Graphics** | Provides options related to graphical visualization of the bridge model. |
| **Database** | Provides access to the databases used by the application. |
| **Help** | Provides access to help and supporting documentation. |
| **Basic Inputs** | Opens the primary project, geometric, design, and material input interface. |
| **Additional Inputs** | Opens the additional parameters required for detailed bridge modelling and design. |

![Header and Navigation](/img/3.1.png)

### 3.1.2 Project and Input Section

The Project and Input section is located on the left side of the application window. It is used to define the project information, bridge geometry, design type, and material inputs.

| Section | Purpose |
|---|---|
| **Type of Structure** | Specifies the type of bridge structure. |
| **Project Location** | Specifies the geographical location of the project. |
| **Superstructure** | Contains the main geometric and structural inputs for the bridge. |
| **Geometric Details** | Defines parameters such as span, carriageway width, median, footpath, and skew angle. |
| **Additional Geometry** | Provides access to additional geometric parameters. |
| **Design Type** | Specifies the design approach used for the project. |
| **Material Inputs** | Allows the user to select materials for different bridge components. |

The *Material Inputs* section also provides a green information (`i`) icon next to the applicable material fields. Selecting this icon opens the corresponding *Material Information* window, where the properties of the selected material can be viewed.

![Project and Input Section](/img/3.2.png)

### 3.1.3 Analysis and Visualization Section

After the required inputs have been entered, the Design control is used to run the analysis and design.

Once the design is completed, the CAD area displays the designed bridge model and provides tools for viewing and analysing the structure.

The right-side toolbar provides quick access to different analysis and visualization views.

| View / Tool | Purpose |
|---|---|
| **Cross-Section View** | Displays the cross-sectional view of the bridge. |
| **Top View** | Displays the bridge model from the top. |
| **Logs Window** | Opens the logs window to view information generated during the application workflow. |
| **3D CAD View** | Displays the three-dimensional CAD model of the bridge. |
| **3D Plots View** | Opens the 3D plots view for graphical representation of the relevant analysis or design information. |

![Analysis and Visualization Section](/img/8.2.png)

The CAD interface also provides controls for displaying different bridge components, including:

- Bridge
- Girder
- Deck
- Cross Bracing
- Crash Barrier

These controls allow the user to select the required components for visualization and inspection of the bridge model.

### 3.1.4 Help

OsdagBridge does not require a separate user account, login, or sign-in process. Therefore, a dedicated user-settings section is not required.

The *Help* option is available in the application and provides access to supporting information and documentation.

### 3.2 Workflow
This section explains the recommended workflow for using OsdagBridge, from entering project information to reviewing the design results and generating the report.

### 3.2.1 Create or Define the Project

Start by opening OsdagBridge and defining the required project information, including the structure type and project location.

### 3.2.2 Enter Basic Inputs

Enter the required geometric, design, and material inputs in the *Basic Inputs* section.

Make sure that all required inputs are provided and that the entered values are valid before proceeding.

### 3.2.3 Enter Additional Inputs(*if custom*)

Open the *Additional Inputs* section to provide the parameters required for detailed bridge modelling and design.

Enter or modify the required values according to the project requirements.

### 3.2.4 Save the Input Configuration

Use *Save Input* to save the current project input configuration when it needs to be reused or reviewed later.

### 3.2.5 Run Design

After completing the required inputs, click *Design* to run the analysis and design.

The application processes the specified inputs and generates the corresponding design information.

### 3.2.6 Review the Model and Analysis Views

After the design is completed, use the available CAD and analysis tools to inspect the designed bridge model.

The available views include:

- Cross-Section View
- Top View
- Logs Window
- 3D CAD View
- 3D Plots View

### 3.2.7 Review the Results

Review the information provided in the *Output Dock*, including:

- Analysis Results
- Design Results
- Design Checks

Verify the generated results before proceeding with further use of the design information.

### 3.2.8 Generate the Report

After reviewing the design results, generate the design report using the available report generation option.

The generated report provides the relevant project inputs, analysis information, design results, and other applicable design details for documentation and further review.

### 3.2.9 Modify Inputs and Re-run the Design(*optional*) 

If changes are required after running the design, use the *Unlock Inputs* control to unlock the input fields.

Modify the required inputs and run the *Design* process again to generate updated results.

### 3.2.10 Typical Workflow

<span class="input-highlight">Create Project</span> → <span class="input-highlight">Enter Basic Inputs</span> → <span class="input-highlight">Enter Additional Inputs(*if custom*)</span> → <span class="input-highlight">Save Input (Optional)</span> → <span class="input-highlight">Run Design</span> → <span class="input-highlight">Review Model and Analysis Views</span> → <span class="input-highlight">Review Results</span> → <span class="input-highlight">Generate Report</span> → <span class="input-highlight">Modify and Re-run if Required*</span>

## 4. Input Fields

This chapter explains the input fields available in OsdagBridge. The input fields allow users to define the project configuration and provide the parameters required for analysis and design.

### 4.1 Basic Inputs

The **Basic Inputs** section contains the primary parameters required to define the bridge project.

Users should enter the required values in the corresponding input fields before proceeding with the design.

The available basic inputs depend on the selected project and design configuration.

### 4.2 Additional Inputs

The **Additional Inputs** section provides parameters that allow users to further define or customise the project configuration.

These inputs may include additional geometric, material, loading, or other design parameters depending on the selected configuration.

Some additional inputs may be automatically defined by the software, while others may be available for user modification.

<span class="input-highlight">Note</span>:  <span class="input-highlight">The available Additional Inputs may vary depending on the selected design configuration.</span>


### 4.3 Initial CAD

The **Initial CAD** view provides a visual representation of the bridge configuration based on the entered project inputs.

Users can use this view to check the defined geometry and configuration before proceeding with the analysis and design process.

The initial CAD representation is intended to help users visually verify the project setup and identify any required changes to the inputs.

## 5. Analysis and Design

This chapter explains the analysis and design process in OsdagBridge, including the analysis framework, applicable design codes, and the generation of design results.

### 5.1 Analysis and Design Framework

OsdagBridge performs bridge analysis and design based on the project configuration and inputs provided by the user.

The analysis model is generated using the defined bridge geometry, material properties, loading conditions, and other applicable parameters.

The analysis results are then used for the subsequent design checks in accordance with the applicable design standards.

### 5.2 Analysis

The analysis process evaluates the structural response of the bridge under the specified loading and boundary conditions.

Depending on the selected project configuration, the software performs the required analysis and provides the corresponding analysis results for review.

### 5.3 Design

After the analysis is completed, OsdagBridge performs the applicable design checks using the analysis results and the specified design parameters.

The design process verifies the relevant structural components against the applicable requirements of the selected design standards.

### 5.4 Design Codes and Standards

The analysis and design procedures in OsdagBridge are based on the applicable Indian design codes and standards supported by the software.

The relevant codes and clauses are considered during the design checks and are referenced in the generated design results and reports.

## 6 Generated Outputs

After the analysis and design process is completed, OsdagBridge provides different outputs for reviewing and documenting the project.

The available outputs include:

- **3D CAD:** Provides a three-dimensional representation of the bridge model for visual inspection.
- **Plots:** Displays graphical results generated from the analysis and design process.
- **Result Table:** Presents the relevant analysis and design results in tabular form.
- **Design Report:** Generates a detailed report containing the project inputs, analysis information, design results, and other applicable design details.
- **Log Window:** Displays the relevant messages and information generated during the analysis and design process.

These outputs can be used to review the model, verify the analysis and design results, and document the completed design.

## 7. Saving and Opening a Project

This chapter explains how to save the project input configuration and open an existing project in OsdagBridge.

### 7.1 Saving the Project

After entering the required project inputs, users can save the input configuration for future use.

Saving the project allows the input configuration to be stored and reused without entering all the project parameters again.

The saved configuration can be used for further analysis, design, or modification when required.

### 7.2 Opening an Existing Project

Users can open a previously saved project configuration using the available file-opening option.

When an existing project is opened, the saved input configuration is loaded into the application.

Users can review the loaded inputs and make the required changes before proceeding with the analysis and design process.

### 7.3 Modifying a Saved Project

After opening a saved project, users can modify the required input parameters.

Once the required changes have been made, the design process can be run again to generate updated analysis and design results.



## 8. Error Messages & Troubleshooting

## 9. FAQs

## 10. References / Additional Resources

