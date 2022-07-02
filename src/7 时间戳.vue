<template>
	<div>
		<p>时间:{{ time | formatDate }}</p>
		<p>时间:{{ time | data }}</p>
	</div>
</template>

<script>
import moment from 'moment';
export default {
	data() {
		return {
			time: 1636450540055,
		};
	},
	filters: {
		formatDate(val) {
			return moment(val).format('YYYY-MM-DD', 'YYYY/MM/DD');
		},
	},
};
</script>

<style></style>
