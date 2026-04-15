<template>
  <div class="page-wrapper">
    <div class="">
      <div class="card">
        <div class="section-header">
          General Information
        </div>
        <div class="section-body space-y-6">
          <div class="upload-box">
            <p class="upload-title">Drop your file here</p>
            <p class="upload-sub">
              Supported file formats: PDF, DOC, DOCX (2MB or less)
            </p>
            <button class="upload-btn">
              Upload
            </button>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div class="space-y-5">
              <div>
                <label class="label">Vessel Name</label>
                <input class="input" />
              </div>

              <div>
                <label class="label">MMSI</label>
                <input class="input" />
              </div>

              <div>
                <label class="label">Call Sign</label>
                <input class="input w-1/2" />
              </div>
            </div>

            <div class="space-y-5">
              <div>
                <label class="label">IMO</label>
                <input class="input" placeholder="Enter IMO Number" />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="label">Type</label>
                  <select class="input">
                    <option>Tug Boat</option>
                  </select>
                </div>

                <div>
                  <label class="label">Flag</label>
                  <select class="input">
                    <option>Indonesia</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- ================= TECHNICAL ================= -->
        <div class="section-header">
          Technical Particular
        </div>

        <div class="section-body grid grid-cols-4 gap-6">

          <div>
            <label class="label">Year Built</label>
            <input class="input" placeholder="Enter Year Built" />
          </div>

          <div>
            <label class="label">Class</label>
            <input class="input" />
          </div>

          <div>
            <label class="label">Gross Tonnage (GT)</label>
            <input class="input" />
          </div>

          <div>
            <label class="label">Net Tonnage (GT)</label>
            <input class="input" />
          </div>

          <div>
            <label class="label">Builder</label>
            <input class="input" />
          </div>

          <div>
            <label class="label">Deadweight</label>
            <input class="input" />
          </div>

          <div>
            <label class="label">Length of Overall (LoA)</label>
            <input class="input" />
          </div>

        </div>

        <!-- ================= OTHER ================= -->
        <div class="section-header">
          Other
        </div>

        <div class="section-body">
          <textarea class="input textarea"></textarea>
        </div>

        <!-- ================= ACTION ================= -->
        <div class="action-bar">
          <button class="btn-cancel" @click="goBack">
            Cancel
          </button>

          <button class="btn-primary">
            Add Vessel
          </button>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.push({ name: "FleetOverview" });
};
</script>

<style scoped>

/* ================= PAGE ================= */
.page-wrapper {
  @apply p-6 bg-[#F3F4FA] min-h-full;
}

.container {
  @apply max-w-[1200px] mx-auto;
}

.page-title {
  @apply text-[28px] font-bold text-[#000348];
}

/* ================= CARD ================= */
.card {
  @apply bg-white rounded-xl shadow-sm border overflow-hidden;
}

/* ================= SECTION ================= */
.section-header {
  @apply bg-gray-100 px-6 py-3 font-semibold text-gray-700 border-t;
}

.section-body {
  @apply p-6;
}

/* ================= INPUT ================= */
.label {
  @apply text-sm text-gray-600 mb-1 block;
}

.input {
  @apply w-full border rounded-lg px-3 text-sm outline-none 
         focus:ring-2 focus:ring-blue-400 h-[38px];
}

.textarea {
  @apply h-40 resize-none;
}

/* ================= UPLOAD ================= */
.upload-box {
  @apply border-2 border-dashed rounded-xl py-10 
         flex flex-col items-center justify-center text-center;
}

.upload-title {
  @apply text-gray-700 font-medium;
}

.upload-sub {
  @apply text-gray-400 text-sm;
}

.upload-btn {
  @apply mt-4 px-6 py-2 rounded-full border border-blue-500 
         text-blue-500 text-sm hover:bg-blue-50;
}

/* ================= BUTTON ================= */
.btn-primary {
  @apply bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700;
}

.btn-cancel {
  @apply bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm;
}

.action-bar {
  @apply flex justify-end gap-3 p-6 border-t bg-gray-50;
}

</style>