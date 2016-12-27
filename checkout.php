<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/header-checkout.php'; ?>

<main class="site-content" id="site-content">
	<?php if ( $_GET['step'] == 1 && $_GET['page'] == 'begin' ) include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step1.php'; ?> <!-- Начало -->
	<?php if ( $_GET['step'] == 1 && $_GET['page'] == 'signup' ) include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step1-signup.php'; ?>
	<?php if ( $_GET['step'] == 1 && $_GET['page'] == 'signin' ) include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step1-signin.php'; ?>
	<?php if ( $_GET['step'] == 1 && $_GET['page'] == 'social' ) include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step1-social.php'; ?>

    <?php if ( $_GET['step'] == 2 && $_GET['page'] == 'signup' ) include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step2-signup.php'; ?>
    <?php if ( $_GET['step'] == 2 && $_GET['page'] == 'info' ) include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step2-info.php'; ?>

    <?php if ( $_GET['step'] == 3 ) include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step3.php'; ?>

    <?php if ( $_GET['step'] == 4 && $_GET['page'] == 'payment' ) include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step4-payment.php'; ?>
    <?php if ( $_GET['step'] == 4 && $_GET['page'] == 'success' ) include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step4-success.php'; ?>
</main>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/product/cart.php'; ?>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/footer-checkout.php'; ?>
