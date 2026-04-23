describe("Contact form e2e", () => {
  beforeEach(() => {
   
    cy.visit("http://localhost:3000");
  });

  it("remplit et soumet le formulaire, puis affiche le message de succès", () => {
    
    cy.get("#contact").scrollIntoView();

    cy.clock();


    cy.get('input[placeholder=""]').first().type("Dupont"); 
    cy.get('input[placeholder=""]').eq(1).type("Jean");
    cy.get("textarea").type("Bonjour, je souhaite un devis.");

  
   cy.get('input[type="submit"][value="Envoyer"]').click();

    cy.contains("En cours").should("exist");


    cy.tick(500);

    // vérifier la modal / message de succès (adapte le texte si besoin)
    cy.contains("Message envoyé !", { timeout: 2000 }).should("be.visible");
  });
});