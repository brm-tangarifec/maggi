<?php
//var_dump($variables['nox']);
?>
<div class="cont-general">
	<div class="cont-princ" title="<?php print_r($variables['nox'][0]->title) ?>" idVideo="<?php print_r($variables['nox'][0]->field_video_url['und'][0]['video_id']); ?>">
		<?php
			print_r($variables['nox'][0]->field_video_url['und'][0]['video_id']);
		?>
	</div>
	<div class="cont-secun">
		<?php
			$aux = 0;
			foreach ($variables['nox'] as $value) {
				if($aux>0){ ?>
					<div class="cont-secun-item">
						<img src="http://img.youtube.com/vi/"<?php print_r($value->field_video_url['und'][0]['video_id']); ?>"/0.jpg"/>
					</div>
				<?php }
				$aux++;
			}
		?>
	</div>
<div>