
# QueryTranslator

`QueryTranslator` is a tool designed to convert SQL queries between different database systems. It supports conversion between SQLite, MySQL, and PostgreSQL by mapping corresponding data types and adjusting SQL syntax. The goal of this tool is to provide a seamless experience for developers working with multiple database systems, allowing them to easily migrate queries between these platforms.

## Features

-   **Type Mapping**: Automatically converts data types between SQLite, MySQL, and PostgreSQL.
-   **Query Translation**: Translates SQL queries to the correct syntax for the target database.
-   **Live Preview**: Allows users to input queries and see the translated query in real-time.
-   **Cross-DB Compatibility**: Supports MySQL, PostgreSQL, and SQLite with a focus on table creation queries.

## Supported Databases

-   **SQLite**: Converts types like `INTEGER`, `REAL`, `TEXT`, `BOOLEAN`, `JSON` to their SQLite equivalents.
-   **MySQL**: Translates `INTEGER`, `FLOAT`, `VARCHAR`, `DATETIME`, `JSON` to MySQL formats.
-   **PostgreSQL**: Converts `INTEGER`, `REAL`, `TEXT`, `VARCHAR`, `JSONB` to PostgreSQL formats.

## Example

If you have a MySQL query like:

```sql
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    created_at DATETIME
);
```

The `QueryTranslator` can convert it to the equivalent PostgreSQL or SQLite query based on the selected target database.

## MySQL to PostgreSQL

```sql
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY,
    "username" CHARACTER VARYING(255) NOT NULL,
    "email" CHARACTER VARYING(255),
    "created_at" TIMESTAMP WITHOUT TIME ZONE
);
```

## MySQL to SQLite

```sql
CREATE TABLE users (
    id INTEGER NOT NULL PRIMARY KEY,
    username NVARCHAR(255) NOT NULL,
    email NVARCHAR(255),
    created_at TEXT
);
```

## Usage

1.  **Input your SQL query** in the text area.
2.  **Select the target database type** (SQLite, MySQL, PostgreSQL).
3.  The converted query will be displayed automatically in the output section.

## Code Structure

### SqliteConverter Class

The main class that handles the conversion logic, it includes:

-   **dbToSqlite**: A mapping of MySQL and PostgreSQL data types to SQLite types.
-   **dbToMySQL**: A mapping of SQLite data types to MySQL types.
-   **dbToPostgreSQL**: A mapping of SQLite data types to PostgreSQL types.

The class handles:

-   Translating column definitions.
-   Handling data type conversion based on the target database type.
-   Generating the final SQL `CREATE TABLE` query for the specified target.

### Functions

-   **translate(value, targetType)**: Main method for converting queries based on the target database.
-   **convertQuery(table, targetType)**: Calls the appropriate function based on the target database type (`toSqliteOut`, `toMySQLOut`, `toPostgreSQLOut`).
-   **replaceAll(str, search, replacement)**: Helper function to replace substrings in the query.

### Event Listeners

The tool listens for changes to the input or target type and automatically updates the output when a change is detected. It also listens for pasted content, ensuring it works smoothly when pasting queries into the input.

## Installation

Clone this repository:

```bash
git clone https://github.com/yourusername/QueryTranslator.git
```

Open the `index.html` file in your browser to use the tool.

## Contributing

Contributions are welcome! If you'd like to improve the tool, feel free to fork the repository and submit a pull request.

-   **Bug Reports**: If you encounter any bugs, please open an issue on GitHub.
-   **Feature Requests**: Suggest new features or improvements via the issues page.

## Implementation

This code was implemented in https://github.com/Planetbiru/MagicAppBuilder

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

-   The `QueryTranslator` uses a custom logic for handling SQL data type conversions.
-   Inspired by the need for a seamless migration between SQLite, MySQL, and PostgreSQL.
