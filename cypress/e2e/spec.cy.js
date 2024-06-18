
describe('Cura Make Appointment',function(){
    
  beforeEach(() => {

      cy.visit('https://katalon-demo-cura.herokuapp.com/');
    
  });

  // it('Visit the URL',function(){
  //     cy.visit('https://katalon-demo-cura.herokuapp.com/')
      

  // });

  function login(){
      cy.contains('Make Appointment').click();
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');
      cy.get('#btn-login').click();
  }
  
  // it('Click on Make Appointment',function(){
  //    login();
  // });

  it('Make Appointment',()=>{
      login();
      cy.get('select').select('Hongkong CURA Healthcare Center');
      cy.get('#chk_hospotal_readmission').click();
      cy.get('#radio_program_medicaid').click();
      cy.get('#txt_visit_date').type('20/06/2024');
      cy.get('#txt_comment').click({force:true});
      cy.get('#txt_comment').type('Comment');
      cy.get('#btn-book-appointment').click();
  });

  // it('Verfiy Appointment',()=>{
  //     cy.get('h2').contains('Appointment Confirmation');
  //     cy.get('#comment').contains('Comment');
  // });

});
// describe('Appointment Confirmation Page', () => {
//     it('should display the appointment confirmation details', () => {
//       cy.visit('https://katalon-demo-cura.herokuapp.com/appointment.php#summary');

//       cy.get('h1').should('contain', 'Appointment Confirmation');
//       cy.get('#comment').contains('Comment').next().should('contain', 'Comment');
//     });
// });