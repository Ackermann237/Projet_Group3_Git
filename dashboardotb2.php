<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">
    <link rel="stylesheet" href="style2.css">
    <title>Responsive Dashboard Design #1 | AsmrProg</title>
</head>

<body>

    <div class="container">
        <!-- Sidebar Section -->
        <aside>
            <div class="toggle">
                <div class="logo">
                    <img src="images/logo.png">
                    <h2>Asmr<span class="danger">Prog</span></h2>
                </div>
                <div class="close" id="close-btn">
                    <span class="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            <div class="sidebar">
                <a href="#">
                    <!-- <span class="material-icons-sharp">
                        dashboard
                    </span> -->
                    <h3 class="btn1adds">Dashboard</h3>
                </a>
                <a href="#">
                    <!-- <span class="material-icons-sharp">
                        person_outline
                    </span> -->
                    <h3 class="btn2adds">Users</h3>
                </a>
                <a href="#">
                    <!-- <span class="material-icons-sharp">
                        receipt_long
                    </span> -->
                    <h3>History</h3>
                </a>
                <a href="#" class="active">
                    <!-- <span class="material-icons-sharp">
                        insights
                    </span> -->
                    <h3>Analytics</h3>
                </a>
                <a href="#">
                    <!-- <span class="material-icons-sharp">
                        mail_outline
                    </span> -->
                    <h3>Tickets</h3>
                    <span class="message-count">27</span>
                </a>
                <a href="#">
                    <!-- <span class="material-icons-sharp">
                        inventory
                    </span> -->
                    <h3>Sale List</h3>
                </a>
                <a href="#">
                    <!-- <span class="material-icons-sharp">
                        report_gmailerrorred
                    </span> -->
                    <h3>Reports</h3>
                </a>
                <a href="#">
                    <!-- <span class="material-icons-sharp">
                        settings
                    </span> -->
                    <h3>Settings</h3>
                </a>
                <a href="#">
                    <!-- <span class="material-icons-sharp">
                        add
                    </span> -->
                    <h3>New Login</h3>
                </a>
                <a href="#">
                    <!-- <span class="material-icons-sharp">
                        logout
                    </span> -->
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
        <!-- End of Sidebar Section -->

        <!-- Main Content -->
    <?php include './composant/dashboar1.php' ?>
    <?php include './composant/profile.php' ?>

    </div>

    <script src="orders.js"></script>
    <script src="index.js"></script>
</body>

</html>
<script src="./js/jsotb.js"></script>
<script src="./js/jquery-3.2.1.min.js"></script>
<script src="./js/jsanime.js"></script>