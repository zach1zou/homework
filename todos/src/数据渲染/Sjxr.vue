<template>
	<div>
		<Pannel>
			<template v-slot:name="scope">
				{{ scope.row.name }}
			</template>
			<template v-slot:age="scope">
				{{ scope.row.age }}
			</template>
			<template v-slot:headImgUrl="scope">
				<img
					v-if="scope.row.headImgUrl == 0"
					:src="scope.row.headImgUrl"
					alt=""
				/>
				<a v-else-if="scope.row.headImgUrl == 1" href="scope.row.headImgUrl"
					>{{ scope.row.headImgUr }}</a
				>
				<div v-else>{{ scope.row.headImgUr }}</div>
				<!-- <div v-if="scope.row.type == 0">
					<a :href="scope.row.headImgUrl">{{ scope.row.headImgUrl }}</a>
				</div>
				<div v-if="scope.row.type == 1">
					<img :src="scope.row.headImgUrl" alt="" />
				</div>

				<div v-if="scope.row.type == 2">
					{{ scope.row.headImgUrl }}
				</div> -->
			</template>
		</Pannel>
	</div>
</template>

<script>
import Pannel from '../数据渲染/Pannel.vue';
export default {
	components: {
		Pannel,
	},
};
</script>

<style></style>
