

<template>
  <table class="data-table">
    <thead>
      <tr>
        <th>{{ headers[0].text }}</th>
        <th>{{ headers[1].text }}</th>
        <th>{{ headers[2].text }}</th>
        <th>{{ headers[3].text }}</th>
        <th>{{ headers[4].text }}</th>
        <th>{{ headers[5].text }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.username }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.service }}</td>
        <td>{{ item.role }}</td>
        <td>{{ item.isClinician }}</td>
        <td>{{ item.practice }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.data-table th {
  background-color: #f0f0f0;
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'username', value: 'username' },
        { text: 'email', value: 'email' },
        { text: 'service', value: 'service' },
        { text: 'role', value: 'role' },
        { text: 'isClinician', value: 'Clinician' },
        { text: 'practice', value: 'practice' },
      ],
      items: [
          {username: 'Dr Peter Powys', email: 'ppow@test4.com', service: 'Cardiff W31111', practice: 'W31111', role: 'Partner', isClinician: 'Y'},
          {username: 'Dr Penny Pembroke', email: 'ppem@test4.com', service: 'Cardiff W31111', practice: 'W31111', role: 'GP Registrar', isClinician: 'Y'},
          {username: 'Ms Caroline Conway', email: 'ccon@test4.com', service: 'Cardiff W31111', practice: 'W31111', role: 'practice Nurse', isClinician: 'Y'},
          {username: 'Miss Wendy Smith', email: 'wsmi@test4.com', service: 'Cardiff W31111', practice: 'W31111', role: 'practice Nurse with HSW ref and NMC PIN', isClinician: 'Y'},
          {username: 'Mr Henry Jones', email: 'hjon@test4.com', service: 'Cardiff W31111', practice: 'W31111', role: 'practice Nurse', isClinician: 'Y'},
          {username: 'Ms Ruth Brown', email: 'rbro@test4.com', service: 'Cardiff W31111', practice: 'W31111', role: 'practice Nurse', isClinician: 'Y'},
          {username: 'Ms Clare Carmarthen', email: 'ccar@test4.com', service: 'Cardiff W31111', practice: 'W31111', role: 'Receptionist', isClinician: 'N'},
          {username: 'Dr Chris Cheshire', email: 'cche@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Locum at Leeds', isClinician: 'Y'},
          {username: 'Dr Tim Torbay', email: 'ttor@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Partner', isClinician: 'Y'},
          {username: 'Dr Alistair Avon (INACTIVE!)', email: 'aavon@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Locum', isClinician: 'Y'},
          {username: 'Dr Colin Carter', email: 'ccar@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Locum', isClinician: 'Y'},
          {username: 'Dr Susan Somerset', email: 'susan.somerset@visionhealth.co.uk', service: 'Leeds 33333', practice: '33333', role: 'Partner', isClinician: 'Y'},
          {username: 'Dr Winifred Wiltshire', email: 'wwil@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Senior Partner', isClinician: 'Y'},
          {username: 'Sister Kathryn Kent', email: 'kathryn.kent@visionhealth.co.uk', service: 'Leeds 33333', practice: '33333', role: 'practice Nurse', isClinician: 'Y'},
          {username: 'Sister Laura Lancashire', email: 'llan@test3.com', service: 'Leeds 33333', practice: '33333', role: 'practice Nurse', isClinician: 'Y'},
          {username: 'Ms Harriet Herts', email: 'haher@test3.com', service: 'Leeds 33333', practice: '33333', role: 'practice Nurse', isClinician: 'Y'},
          {username: 'Ms Katy Jacks', email: 'kjac@test3.com', service: 'Leeds 33333', practice: '33333', role: 'practice Nurse', isClinician: 'Y'},
          {username: 'Mr Edward Essex', email: 'edward.essex@visionhealth.co.uk', service: 'Leeds 33333', practice: '33333', role: 'Receptionist', isClinician: 'N'},
          {username: 'Ms Caroline Cornwall', email: 'ccor@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Administrator', isClinician: 'N'},
          {username: 'Mr Daniel Devon', email: 'ddev@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Community Nurse', isClinician: 'Y'},
          {username: 'Mr Colin Cambridge', email: 'ccam@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Paramedic', isClinician: 'Y'},
          {username: 'Mr Brian Bedford', email: 'bbed@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Dentist', isClinician: 'Y'},
          {username: 'Ms Sally Shropshire', email: 'sshr@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Community Medical Officer', isClinician: 'Y'},
          {username: 'Dr Olivia O’Leary', email: 'olivia.o’leary@test3.com', service: 'Leeds 333333', practice: '333333', role: '', isClinician: 'Y'},
          {username: 'Dr Jane Birch', email: 'jane.birch@visionhealth.co.uk', service: 'Leeds & Dundee Federation LDFS_001', practice: 'LDFS_001', role: 'No V3 role', isClinician: 'Y'},
          {username: 'Mr Edward Bee', email: 'edward.bee@visionhealth.co.uk', service: 'Leeds & Dundee Federation LDFS_001', practice: 'LDFS_001', role: 'No V3 role', isClinician: ''},
          {username: 'Harry Herts', email: 'hherts@test3.com', service: 'Leeds & Dundee Federation LDFS_001', practice: 'LDFS_001', role: 'No V3 role', isClinician: 'Y'},
          {username: 'Dr Bob Ash', email: 'bob.ash@visionhealth.co.uk', service: 'Dundee 99903', practice: ' 99903', role: 'Partner', isClinician: 'Y'},
          {username: 'Dr Alison Rowan', email: 'arow@test2.com', service: 'Dundee 99903', practice: ' 99903', role: 'Partner at Dundee', isClinician: 'Y'},
          {username: 'Dr Robert Hawthorn', email: 'rhaw@test2.com', service: 'Dundee 99903', practice: ' 99903', role: 'Assistant', isClinician: 'Y'},
          {username: 'Dr Richard Linden', email: 'richard.linden@visionhealth.co.uk', service: 'Dundee 99903', practice: ' 99903', role: 'Partner', isClinician: 'Y'},
          {username: 'Sister Sheena Birch', email: 'sbee@test2.com', service: 'Dundee 99903', practice: ' 99903', role: 'Community Nurse', isClinician: 'Y'},
          {username: 'Sister Marietta Maple', email: 'mmap@test2.com', service: 'Dundee 99903', practice: ' 99903', role: 'practice Nurse', isClinician: 'Y'},
          {username: 'Linda Larch', email: 'llar@test2.com', service: 'Dundee 99903', practice: ' 99903', role: 'Receptionist', isClinician: 'N'},
          {username: 'Fiona Willow', email: 'fwil@test2.com', service: 'Dundee 99903', practice: ' 99903', role: 'Administrator', isClinician: 'N'},
          {username: 'Andrew Suttonone', email: 'ansu@test3.com', service: 'Leeds 33333', practice: '33333', role: 'GP Registar', isClinician: 'Y'},
          {username: 'Brian Suttontwo', email: 'brsu@test3.com', service: 'Leeds 33333', practice: '33333', role: 'Assistant', isClinician: 'Y'},
          {username: 'Dr Tim Cue', email: 'tcue@example.org', service: 'Ayr 22222', practice: '22222', role: 'Partner', isClinician: 'Y'},
          {username: 'Mrs Jenny Jones', email: 'jjones@test5.com', service: 'Newport Z88888', practice: 'Z88888', role: 'practice Nurse with HSW ref ', isClinician: 'Y'},
          {username: 'Dr Garry Gwent', email: 'ggwe@test5.com', service: 'Newport Z88888', practice: 'Z88888', role: 'GP', isClinician: 'Y'},
          {username: 'Brother Bob Demo', email: 'bdemo@test1.com', service: 'Worthy Down 99904', practice: '99904', role: 'Acupuncturist', isClinician: 'Y'},

      ],
    };
  },
};
</script>
