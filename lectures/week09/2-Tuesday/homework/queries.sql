-- Write queries to find the answers below:

-- - What are all projects that use JavaScript?
SELECT project.name FROM 
    project
INNER JOIN
    project_uses_tech
ON
    project_uses_tech.project_id = project.id
INNER JOIN
    tech
ON
    tech.id = project_uses_tech.tech_id
WHERE
    project_uses_tech.tech_id = 3;

-- - What are all technologies used by the Personal Website?
SELECT project.name as "project name", tech.name as "tech name" FROM 
    project
INNER JOIN
    project_uses_tech
ON
    project_uses_tech.project_id = project.id
INNER JOIN
    tech
ON
    tech.id = project_uses_tech.tech_id
WHERE
    project_uses_tech.project_id = 4;

-- - Perform a left outer join from the tech table to the project_uses_tech table - which techs has no associated project?
SELECT tech.name as "tech name" FROM 
    tech
LEFT OUTER JOIN
    project_uses_tech
ON
    tech.id = project_uses_tech.tech_id
WHERE 
    project_uses_tech.tech_id IS NULL;

-- - Based on the previous query, get the count of the number of techs used by each project.
SELECT project.name, count(tech_id) as "num of techs" FROM 
    project_uses_tech
INNER JOIN
    project
ON
    project.id = project_uses_tech.project_id
GROUP BY
    project.id
ORDER BY
    project.name;

-- - Perform a left outer join from the project table to the project_users_tech table - which projects has no associated tech?
SELECT project.name as "project without tech" FROM 
    project
LEFT OUTER JOIN
    project_uses_tech
ON
    project.id = project_uses_tech.project_id
WHERE 
    project_uses_tech.tech_id IS NULL;

-- - Based on the previous query, get the count of the number of projects that use each tech.
SELECT tech.name, count(*) FROM 
    tech
INNER JOIN
    project_uses_tech
ON
    project_uses_tech.tech_id = tech.id
GROUP BY
    tech.name;

-- - List all projects along with each technology used by it. You will need to do a three-way join.
-- SELECT project.name, tech.name FROM 
--     project
-- INNER JOIN
--     project_uses_tech
-- ON
--     project_uses_tech.tech_id = project.id
-- INNER JOIN 
--     tech
-- ON
--     tech.id = project_uses_tech.tech_id;

-- - List all the distinct techs that are used by at least one project.
SELECT tech.name FROM 
    tech
INNER JOIN
    project_uses_tech
ON
    project_uses_tech.tech_id = tech.id
GROUP BY
    tech.name;

-- - List all the distinct techs that are not used by any projects.
SELECT project.name as "project without tech" FROM 
    project
LEFT OUTER JOIN
    project_uses_tech
ON
    project.id = project_uses_tech.project_id
WHERE 
    project_uses_tech.tech_id IS NULL;

-- - List all the distinct projects that use at least one tech.
SELECT project.name as "projects with tech" FROM 
    project
INNER JOIN
    project_uses_tech
ON
    project_uses_tech.project_id = project.id
GROUP BY
    project.name;

-- - List all the distinct projects that use no tech.
SELECT project.name as "project without tech" FROM 
    project
LEFT OUTER JOIN
    project_uses_tech
ON
    project.id = project_uses_tech.project_id
WHERE 
    project_uses_tech.tech_id IS NULL;


-- - Order the projects by how many tech it uses.
SELECT project.name, count(tech_id) as "num of techs" FROM 
    project_uses_tech
INNER JOIN
    project
ON
    project.id = project_uses_tech.project_id
GROUP BY
    project.id
ORDER BY
    "num of techs";

-- - Order the tech by how many projects use it.
SELECT tech.name, count(project_id) as "num of projects" FROM 
    project_uses_tech
INNER JOIN
    tech
ON
    tech.id = project_uses_tech.tech_id
GROUP BY
    tech.id
ORDER BY
    "num of projects";

-- - What is the average number of techs used by a project?

SELECT AVG(counts) FROM (
    SELECT count(tech_id) as counts FROM 
        project
    INNER JOIN
        project_uses_tech
    ON
        project_uses_tech.project_id = project.id 
    GROUP BY
        project.id
) as "average";