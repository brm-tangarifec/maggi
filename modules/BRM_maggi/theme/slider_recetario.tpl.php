<div class="cont-general">
	<div class="cont-princ" title="<?php print_r($variables['nox'][0]->title) ?>" idVideo="<?php print_r($variables['nox'][0]->field_video_url['und'][0]['video_id']); ?>">
		<div class="embed-responsive embed-responsive-16by9">
		  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/<?php print_r($variables['nox'][0]->field_video_url['und'][0]['video_id']); ?>?rel=0&autoplay=0"></iframe>
		</div>
	</div>
	<div class="cont-secun bxslider">
		<?php
			$aux = 0;
			foreach ($variables['nox'] as $value) {
				if($aux>0){ ?>
					<div class="cont-secun-item row" title="<?php print_r($value->title); ?>" idvideosecun="<?php print_r($value->field_video_url['und'][0]['video_id']); ?>">
						<img width="240px" height="180" src="http://img.youtube.com/vi/<?php print_r($value->field_video_url['und'][0]['video_id']); ?>/0.jpg"/>
						<h3><?php print_r($value->title); ?></h3>
					</div>
				<?php }
				$aux++;
			}
		?>
	</div>
</div>