<template>
  <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  </div>
</template>

<script>
export default {
	name: "CheckBox",
	data() {
		return {
			status: "not_accepted"
		};
	}
};
</script>