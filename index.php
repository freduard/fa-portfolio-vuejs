<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $honeyPotMail = $_POST['email'];
    $honeyPotWebsite = $_POST['website'];
    $subject = "New message from portfolio";
    $mailFrom = $_POST['emanueladdresshaha'];
    $message = $_POST['message'];
    $mailTo = "server@tak21fredyait.itmajakas.ee";
    $headers = "Sent by ".$name." at ".$mailFrom;

    if (empty($honeyPotMail) && empty($honeyPotWebsite)) {
        try {
            mail($mailTo, $subject, $message, $headers);
            header("Location: https://fredyait.com/Contact.vue?state=1");
        }
        catch(Exception) {
            header("Location: https://fredyait.com/Contact.vue?state=2");
        }
    } else {
        header("Location: https://fredyait.com");
    }
}