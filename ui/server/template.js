export default function template(body) {
  return `<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title>issue-tracker</title>

    <style>
        table.bordered-table th,
        td {
            border: 1px solid silver;
            padding: 4px;
        }
        
        table.bordered-table {
            border-collapse: collapse;
        }
        
        a.active {
            background-color: #D8D8F5;
        }
    </style>
</head>

<body>
    <!-- We will add a React element inside this div. -->
    <div id="contents">${body}</div>
    <script src="/env.js"></script>
    <script src="/vendor.bundle.js"></script>
    <script src="/app.bundle.js"></script>
</body>

</html>`;
}
