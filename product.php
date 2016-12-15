<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/header.php'?>

<main class="site-content" id="site-content">
	<article class="product">
		<div class="container">
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/product/specs.php' ?>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/product/info.php' ?>
		</div>
	</article> <!-- /.product -->

	<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/product/sliders.php' ?>
</main>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/product/cart.php' ?>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/footer.php'?>
