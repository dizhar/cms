<?
if (is_numeric(Login::get('person_id'))) {
	if (Login::get('activation_required')) {
?>
		<font color="red">
        You must activate your account before signing in. <br />
        Click <a href="javascript:activation('<?=Login::get('person_ide')?>');">here</a> to resend activation email.
        </font>
<?
		include('pages/login/logout.php');
	}
	else {
		echo 'true';
	}
} else {
	echo 'false';
}