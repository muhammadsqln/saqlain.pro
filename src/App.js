import React from 'react';
import './App.css';


function Cover() {
    return <div id="cover">

        <h2 class="cover-text">Muhammad Saqlain</h2>
        <h4 class="cover-text">Toronto, Canada</h4>
        <h4 class="cover-text">(647) 786-6803</h4>

        <h4 class="cover-text">muhammads2001@hotmail.com</h4>
    </div>

}



function Navigator(count) {
    return <div id="navigator">
        <Dot selected={false} />
        <Dot selected={true} />
        <Dot selected={false} />
        <Dot selected={false} />
        <Dot selected={false} />
    </div>
}

function Dot(props) {

    const className = props.selected === true ? "dot selected" : "dot";

    return <div className={className}>

    </div>

}


function DetailPane() {

    const date = new Date().getFullYear();

    return <div id="detail-pane">



        <DetailTitle title="Experience" />
        <JobTile duties={[[<b>Software development</b>, <li class="listItem">NC Pattern</li>,
        <li class="listItem">Launchpad</li>,
        <li class="listItem">Standard Library</li>,
        <li class="listItem">BOM Manipulator</li>,
        <li class="listItem">Excel Nesting Tool</li>,
        <li class="listItem">Developed and deployed numerous applications in C# for internal company use for many departments. </li>,
        <li class="listItem">Developed Solidworks add-ins, Solidworks PDM add-ins, Excel Add-ins,  Solidworks & PDM Standalone applications, and Solidworks Macros. </li>],

        [<b>BOM Integration</b>, <li class="listItem">Designed and trained the engineering department of the process of exporting a Solidworks Bill of Material into an ERP software, Industrios. </li>,
        <li class="listItem">Architected a Solidworks PDM add-in to validate, transform, and transfer data from the Solidworks BOM to ERP. </li>,
        <li class="listItem">Worked with third-party vendor to develop, and evolve the add-in. Tested each iteration of the add-in and deployed to PDM. </li>],
        [<b>Reporting</b>, <li class="listItem">Developed numerous interactive dashboards in Microsoft PowerBI, pulling data from various sources: SQL Server, MySQL, Access, ODBC, excel files, csv files.
                </li>, <li class="listItem">Automated certain data sources using Python & Selenium to download reports from the web periodically.
                </li>, <li class="listItem">Deployed dashboards and enabled data refreshes using On-Premise Gateway. </li>],
        [<b>PDM Administration</b>, <li class="listItem">Designed, maintained, and deployed Datacards.</li>, <li class="listItem">Maintained PDM lists</li>, <li class="listItem">Managed user permissions.</li>, <li class="listItem">Folder Structure</li>],
        [<b>Solidworks CAM</b>, <li class="listItem">Developed the technology database for CAMWorks & Solidworks CAM</li>, <li class="listItem">Created an instruction manual “CAM Handbook” tutorial for setting up CAM on Solidworks and to start creating CNC files.</li>, <li class="listItem">Conducted training sessions with various departments on creating CNC files. </li>]

        ]}
            title="Development Engineer - System & Tools"
            start="February 2019"
            end="Present"
            company="Array Marketing"
        />
        <JobTile duties={["Reviewed engineering technical drawings being sent for prototyping. Identified fit & function issues, incorrect clearances, invalid or inefficient design for manufacturing & assembly, issues with CNC files, missing assembly information etc. ", "Conveyed potential issues back to engineers paired with possible solutions and/or steps for rectification. ", "Maintained issues in a database, created dashboards using Microsoft PowerBI for conducting data analytics.", "Hosted periodic sessions with the engineering department and presented information back of common, new, or impactful issues.", "Trained new hires and assigned projects. ", "Resolved technical issues that arose during prototyping or worked with the project's engineer to ensure all issues are resolved and closed timely."]}

            title="Quality Engineer"
            start="July 2016"
            end="February 2019"
            company="Array Marketing"
        />

        <DetailTitle title="Education" />
        <JobTile duties={[]}

            title="Mechanical Engineering Technology"
            start="2013"
            end="2016"
            company="Centennial College, Toronto - Advanced Diploma"
        />
        <DetailTitle title="Tools & Technologies" />
        <Skills skills={[
            { name: "Solidworks", level: 90 },
            { name: "Flutter", level: 90 },
            { name: "Dart", level: 90 },
            { name: "3D Printing", level: 90 },
            { name: "C#", level: 90 },
            { name: "VBA", level: 90 },
            { name: "Microsoft Power BI", level: 85 },
            { name: "Firebase", level: 85 },
            { name: "AutoCAD", level: 80 },
            { name: "NoSQL", level: 80 },
            { name: ".NET Programming", level: 80 },
            { name: "Solidworks API", level: 80 },
            { name: "Solidworks PDM API", level: 80 },
            { name: "Cloud Firestore", level: 80 },
            { name: "Python", level: 70 },
            { name: "SQL", level: 70 },
            { name: "Java", level: 70 },
            { name: "Adobe Illustrator", level: 70 },
            { name: "Data Analysis", level: 70 },
            { name: "React", level: 60 },
            { name: "JavaScript", level: 50 },
            { name: "Adobe Photoshop", level: 50 },
            { name: "Adobe Premiere Pro", level: 50 },
            { name: "Google Ads", level: 50 },
            { name: "Facebook Ads", level: 50 },
            { name: "Swift", level: 50 },
            { name: "Node.JS", level: 50 },
            { name: "GIT", level: 50 },
            { name: "Google Cloud", level: 50 },
            { name: "AWS", level: 40 },
            { name: "Adobe After Effects", level: 30 },
            { name: "Redux", level: 30 },
            { name: "Tensorflow", level: 20 },
        ]} />

        <div style={{margin:"30px"}}>
            <a href="https://enabol.com">© {date} Enabol</a>
        </div>






    </div>
}

function DetailTitle(props) {

    return <div id="detail-title">

        {props.title}
    </div>


}

function JobTile(props) {
    const duties = props.duties.map(i => { return <div style={{ color: "#858484", fontSize: "20px", margin: "10px 0px" }}>{i}</div> })
    return <div style={{ width: "100%" }}>
        <div style={{ color: "#858484", margin: "30px 20px 5px 20px", fontWeight: "bold", fontSize: "27px" }}>
            {props.title}
        </div>
        <div style={{ color: "#858484", margin: "0px 20px 5px 20px", display: "flex", justifyContent: "space-between", fontSize: "20px" }}>
            <span>{props.company}</span>
            <span>{props.start} to {props.end}</span>
        </div>
        <div style={{ margin: "15px 30px" }}>
            {duties}
        </div>

    </div>
}

function Skills(props) {

    const bars = props.skills.map(s => {





        return <div style={{ display: "flex", flexDirection: "column", margin: "10px" }} >


            <div style={{ fontSize: "12px", margin: "0px 0 2px 5px", color: "#858484" }}>{s.name}</div>
            <div style={{ width: "200px", height: "30px", backgroundColor: "white", boxShadow: "0px 0px 3px 0 #888888", borderRadius: "10px", padding: "5px" }}>
                <div style={{ width: s.level * 2 + "px", height: "30px", backgroundColor: "#9FA4E3", borderRadius: "5px" }}>

                </div>

            </div>

        </div>

    }
    );




    return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {bars}
    </div>
}




function App() {
    return <div id="home">
        <Cover />
        <DetailPane />






    </div>;
}

export default App;