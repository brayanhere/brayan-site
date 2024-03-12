import Accordion from "./accordion";

const Projects = () => {
  return (
    <div className=" mt-5 p-4 bg-gray-800 rounded-lg">
      <Accordion
        title="Portfolio Website"
        answer="Developed and launched a portfolio website using ReactJS and deployed it on Amazon AWS ECS (Elastic Container Service). Implemented a CI/CD DevOps pipeline with AWS CodeCatalyst, ensuring integration and continuous delivery. Demonstrated knowledge in modern web development technologies and DevOps practices."
      />
      <Accordion
        title="Python Data Analysis"
        answer="Utilized Python's Pandas library for collecting and cleaning 
        credit card approvals data. Conducted exploratory data analysis using 
        Matplotlib and Seaborn to unveil patterns and trends within the dataset.
         Employed Python's scikit-learn machine learning library to develop
          a predictive model, assessing and enhancing the accuracy score of the dataset."
      />
      <Accordion
        title="Tableau and SQL Data Analysis"
        answer="Utilized Tableau and performed SQL-based exploratory data analysis to uncover worldwide data job trends and salary insights. Created dynamic dashboards for visual presentation, showcasing proficiency in extracting meaningful information for enhanced industry understanding. "
      />
      <Accordion
        title="Business Intelligence Project"
        answer="Analysed Sales data to design and implement a comprehensive Excel dashboard, Leveraged PivotTables to 
        summarize and analyse large datasets. Demonstrated proficiency in data visualization, transforming complex 
        information into intuitive and visually compelling reports."
      />
    </div>
  );
};

export default Projects;
